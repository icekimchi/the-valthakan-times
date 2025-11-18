export function extractYouTubeId(url: string): string | null {
  try {
    const regex =
      /(?:youtu\.be\/|youtube\.com\/(?:shorts\/|watch\?v=|embed\/))([\w-]{6,})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}
