import { config } from '@/scripts/config';

export function pascalize(raw: string): string {
  return raw
    .replace(/['"]/g, '')
    .replace(/\(.*?\)/g, '') // drop "(...)" content
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join('');
}

export function sectionFolderName(sectionCrumb: string): string {
  return config.sectionNameMap[sectionCrumb] ?? pascalize(sectionCrumb);
}

export function topicFolderName(topicCrumb: string): string {
  return config.topicNameMap[topicCrumb] ?? pascalize(topicCrumb);
}