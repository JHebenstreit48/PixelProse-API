import fs from 'node:fs';
import path from 'node:path';

export function ensureDir(dir: string) {
  fs.mkdirSync(dir, { recursive: true });
}

export function exists(filePath: string) {
  return fs.existsSync(filePath);
}

export function readText(filePath: string) {
  return fs.readFileSync(filePath, 'utf8');
}

export function writeText(filePath: string, content: string) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}