import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const mediaUrl = searchParams.get('url');
    const title = searchParams.get('title') || 'video';
    const ext = searchParams.get('ext') || 'mp4';

    if (!mediaUrl) {
      return new NextResponse('Missing url parameter', { status: 400 });
    }

    const cleanTitle = title
      .replace(/[^a-zA-Z0-9_\-\s.]/g, '')
      .trim()
      .replace(/\s+/g, '_')
      .slice(0, 80) || 'video';

    const filename = `${cleanTitle}.${ext.toLowerCase()}`;

    const upstream = await fetch(mediaUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
      },
    });

    if (!upstream.ok || !upstream.body) {
      return NextResponse.redirect(mediaUrl);
    }

    const contentType = upstream.headers.get('content-type') || (ext === 'mp3' ? 'audio/mpeg' : 'video/mp4');
    const contentLength = upstream.headers.get('content-length');

    const headers = new Headers();
    headers.set('Content-Disposition', `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`);
    headers.set('Content-Type', contentType);
    if (contentLength) {
      headers.set('Content-Length', contentLength);
    }

    return new NextResponse(upstream.body, {
      status: 200,
      headers,
    });
  } catch (err: any) {
    return new NextResponse(err?.message || 'Download failed', { status: 500 });
  }
}
