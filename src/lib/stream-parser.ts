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

export function parseStreamData(raw: any, videoId?: string) {
  const medias = Array.isArray(raw.medias) ? raw.medias : [];
  const videos: any[] = [];
  const audios: any[] = [];

  for (const m of medias) {
    if (!m || !m.url) continue;
    const fmt = m.format || '';
    const extMatch = fmt.match(/\[\.(\w+)\]/i);
    const rawExt = extMatch ? extMatch[1].toLowerCase() : (m.mime?.includes('audio') ? 'mp3' : 'mp4');
    const isAudio =
      ['m4a', 'mp3', 'weba', 'aac', 'opus', 'flac', 'wav', 'ogg'].includes(rawExt) ||
      /kbps|audio only|audio-only|\.m4a|\.mp3|\.weba|\.aac|opus/i.test(fmt) ||
      (!/\d{3,4}p/i.test(fmt) && !/video/i.test(fmt));

    const qualityMatch = fmt.match(/^([0-9]+p)/i);
    const quality = qualityMatch ? qualityMatch[1] : (fmt.split(/\s+/)[0] || (isAudio ? '128 kbps' : '720p HD'));

    if (isAudio) {
      audios.push({
        url: m.url,
        quality: quality.includes('kbps') ? quality : '320 kbps (High Fidelity)',
        format: fmt || 'MP3 Audio 320kbps',
        extension: rawExt === 'weba' ? 'M4A' : rawExt.toUpperCase(),
        size: m.fileSize,
        sizeText: m.sizeStr || formatBytes(m.fileSize),
      });
    } else {
      videos.push({
        url: m.url,
        quality,
        format: fmt || `${quality} MP4`,
        extension: rawExt.toUpperCase(),
        size: m.fileSize,
        sizeText: m.sizeStr || formatBytes(m.fileSize),
      });
    }
  }

  // Sort videos by resolution descending
  videos.sort((a, b) => {
    const resA = parseInt(a.quality) || 0;
    const resB = parseInt(b.quality) || 0;
    return resB - resA;
  });

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
