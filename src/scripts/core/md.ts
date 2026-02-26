export function lastUrlSegment(urlPath: string): string {
  const clean = urlPath.split('?')[0].split('#')[0].replace(/\/+$/, '');
  const parts = clean.split('/').filter(Boolean);
  return parts.at(-1) ?? 'page';
}