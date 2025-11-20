import { Eczar } from "next/font/google";

export function normalizeBeehiivHtml(raw: string): string {
  let html = raw;

  // 1) DOCTYPE, <html>, </html> 제거
  html = html.replace(/<!doctype html[^>]*>/gi, "");
  html = html.replace(/<\/?html[^>]*>/gi, "");

  // 2) <head>...</head> 통째로 제거
  html = html.replace(/<head[^>]*>[\s\S]*?<\/head>/gi, "");

  // 3) <body ...>...</body> 에서 내부 내용만 추출
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    html = bodyMatch[1]; // body 안쪽 내용만 사용
  }

  // 4) h2 스타일
  html = html.replace(/<h2>/g, '<h2 class="text-2xl font-[\'Eczar\'] font-semibold mt-8 mb-4">');

  // 5) img responsive
  html = html.replace(
    /<img /g,
    '<img class="w-full h-auto rounded-xl my-6" '
  );

  // 6) blockquote 스타일
  html = html.replace(
    /<blockquote>/g,
    '<blockquote class="border-l-4 pl-4 italic my-4 opacity-80">'
  );

  return `
    <div class="relative rounded-2xl overflow-hidden">
      <div class="absolute inset-0 bg-[url('/newsletter-bg.jpg')] bg-cover bg-center"></div>
      <div class="absolute inset-0 bg-[#DBBE95]/10"></div>
      <div class="relative p-6">
        ${html}
      </div>
    </div>
  `;
}
