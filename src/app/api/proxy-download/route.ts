import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mediaUrl = searchParams.get('url');
    const title = searchParams.get('title') || 'youtube-media';
    const ext = searchParams.get('ext') || 'mp4';

    if (!mediaUrl) {
      return new NextResponse('Missing url parameter', { status: 400 });
    }

    const cleanTitle = title
      .replace(/[^a-zA-Z0-9_\-\s.]/g, '')
      .trim()
      .replace(/\s+/g, '_')
      .slice(0, 80);

    const filename = `${cleanTitle}.${ext.toLowerCase()}`;

    const upstreamResponse = await fetch(mediaUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    });

    if (!upstreamResponse.ok || !upstreamResponse.body) {
      // If direct stream fetching fails (e.g. expired link), redirect browser directly to original url
      return NextResponse.redirect(mediaUrl);
    }

    const contentType = upstreamResponse.headers.get('content-type') || (ext === 'mp3' ? 'audio/mpeg' : 'video/mp4');
    const contentLength = upstreamResponse.headers.get('content-length');

    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`);
    headers.set('Content-Type', contentType);
    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }

    return new NextResponse(upstreamResponse.body as any, {
      status: 200,
      headers,
    });
  } catch (err: any) {
    return new NextResponse(err.message || 'Stream proxy failed', { status: 500 });
  }
}
