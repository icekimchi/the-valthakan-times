export function transformBeehiivHtml(raw: string): string {
  let html = raw;

  // 예시 1: 모든 h2에 클래스 추가
  html = html.replace(/<h2>/g, '<h2 class="text-2xl font-semibold mt-8 mb-4">');

  // 예시 2: img 태그를 responsive하게
  html = html.replace(
    /<img /g,
    '<img class="w-full h-auto rounded-xl my-6" '
  );

  // 예시 3: blockquote 스타일 주기
  html = html.replace(
    /<blockquote>/g,
    '<blockquote class="border-l-4 pl-4 italic my-4 opacity-80">'
  );

  return html;
}
