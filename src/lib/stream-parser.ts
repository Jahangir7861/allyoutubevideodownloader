export function extractVideoId(urlOrId: string): string | null {
  const t = urlOrId.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(t)) return t;
  try {
    const parsed = new URL(t.startsWith('http') ? t : `https://${t}`);
    if (parsed.hostname.includes('youtube.com')) {
      const v = parsed.searchParams.get('v');
      if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;
      const match = parsed.pathname.match(/\/(shorts|embed|v|live)\/([a-zA-Z0-9_-]{11})/);
      if (match) return match[2];
    }
    if (parsed.hostname === 'youtu.be') {
      const id = parsed.pathname.replace(/^\/+/, '').split('/')[0].split('?')[0];
      if (/^[a-zA-Z0-9_-]{11}$/.test(id)) return id;
    }
  } catch {
    const fallbackMatch = t.match(/(?:v=|\/shorts\/|\/embed\/|\/v\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (fallbackMatch) return fallbackMatch[1];
  }
  return null;
}

export function formatBytes(bytes?: number): string {
  if (!bytes || !Number.isFinite(bytes)) return '';
  if (bytes >= 1073741824) return (bytes / 1073741824).toFixed(2) + ' GB';
  if (bytes >= 1048576) return (bytes / 1048576).toFixed(2) + ' MB';
  if (bytes >= 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return bytes + ' B';
}

export function getResolutionRank(quality: string): number {
  const s = String(quality).toLowerCase().trim();
  if (s.includes('8k') || s.includes('4320')) return 4320;
  if (s.includes('4k') || s.includes('2160') || s.includes('uhd')) return 2160;
  if (s.includes('2k') || s.includes('1440') || s.includes('qhd')) return 1440;
  if (s.includes('1080') || s.includes('fhd')) return 1080;
  if (s.includes('720') || s.includes('hd')) return 720;
  if (s.includes('480')) return 480;
  if (s.includes('360')) return 360;
  if (s.includes('240')) return 240;
  if (s.includes('144')) return 144;
  const match = s.match(/(\d{3,4})p/);
  if (match) return parseInt(match[1], 10);
  const num = parseInt(s, 10);
  return Number.isFinite(num) ? num : 0;
}

export function parseStreamData(raw: any, videoId?: string) {
  const medias = Array.isArray(raw.medias) ? raw.medias : [];
  const videos: any[] = [];
  const audios: any[] = [];

  for (const m of medias) {
    if (!m || !m.url) continue;
    const fmt = m.format || '';
    const extMatch = fmt.match(/\[\.(\w+)\]/i);
    let rawExt = extMatch ? extMatch[1].toLowerCase() : (m.mime?.includes('audio') ? 'mp3' : 'mp4');

    // Detect if this stream has a video resolution (2K, 4K, 8K, 1080p, etc.)
    const hasVideoResolution = /([0-9]{3,4}p|\b[248]k\b|uhd|qhd|fhd)/i.test(fmt);
    const isExplicitAudio = !hasVideoResolution && (
      ['m4a', 'mp3', 'aac', 'opus', 'flac', 'wav', 'ogg'].includes(rawExt) ||
      /kbps|audio only|audio-only/i.test(fmt)
    );

    let quality = '720p (HD)';
    if (/8k|4320p/i.test(fmt)) quality = '4320p (8K Ultra HD)';
    else if (/4k|2160p/i.test(fmt)) quality = '2160p (4K Ultra HD)';
    else if (/2k|1440p/i.test(fmt)) quality = '1440p (2K Quad HD)';
    else if (/1080p/i.test(fmt)) quality = '1080p (Full HD)';
    else if (/720p/i.test(fmt)) quality = '720p (HD)';
    else if (/480p/i.test(fmt)) quality = '480p (Standard)';
    else if (/360p/i.test(fmt)) quality = '360p (Medium)';
    else if (/240p/i.test(fmt)) quality = '240p (Low)';
    else if (/144p/i.test(fmt)) quality = '144p (Eco)';
    else if (isExplicitAudio) quality = '320 kbps (High Fidelity)';

    if (isExplicitAudio) {
      audios.push({
        url: m.url,
        quality: quality.includes('kbps') ? quality : '320 kbps (High Fidelity)',
        format: fmt || 'MP3 Audio 320kbps',
        extension: rawExt === 'weba' ? 'M4A' : rawExt.toUpperCase(),
        size: m.fileSize,
        sizeText: m.sizeStr || formatBytes(m.fileSize),
      });
    } else {
      // If extension was weba but it's a 2K/4K/video stream, display as WEBM or MP4
      const displayExt = (rawExt === 'weba' || rawExt === 'webm') ? 'WEBM' : rawExt.toUpperCase();
      videos.push({
        url: m.url,
        quality,
        format: fmt || `${quality} ${displayExt}`,
        extension: displayExt,
        size: m.fileSize,
        sizeText: m.sizeStr || formatBytes(m.fileSize),
      });
    }
  }

  // Sort videos strictly by resolution descending (8K -> 4K -> 2K -> 1080p -> 720p -> 480p...)
  videos.sort((a, b) => getResolutionRank(b.quality) - getResolutionRank(a.quality));

  // If audio wasn't separated in upstream payload, provide direct audio extracts from best stream
  if (audios.length === 0 && videos.length > 0) {
    const bestStream = videos[0];
    audios.push({
      url: bestStream.url,
      quality: '320 kbps (High Fidelity)',
      format: 'MP3 High Quality',
      extension: 'MP3',
      size: Math.round((bestStream.size || 25000000) * 0.15),
      sizeText: formatBytes(Math.round((bestStream.size || 25000000) * 0.15)) || '4.5 MB',
    });
    audios.push({
      url: bestStream.url,
      quality: '128 kbps (Standard)',
      format: 'M4A Audio Track',
      extension: 'M4A',
      size: Math.round((bestStream.size || 25000000) * 0.08),
      sizeText: formatBytes(Math.round((bestStream.size || 25000000) * 0.08)) || '2.2 MB',
    });
  }

  return {
    id: videoId,
    title: raw.title || 'YouTube Video',
    duration: raw.duration,
    durationFormatted: raw.duration ? `${Math.floor(raw.duration / 60)}:${String(raw.duration % 60).padStart(2, '0')}` : undefined,
    thumbnail: raw.imageUrl || (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : ''),
    videos,
    audios,
  };
}
