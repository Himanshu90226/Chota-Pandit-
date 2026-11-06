import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const root = process.cwd();
const out = new URL('../www/', import.meta.url);
const pages = [
  'index.html',
  '404.html',
  'contact-us.html',
  'privacy-policy.html',
  'replacement-policy.html',
  'shipping-policy.html',
  'terms-and-conditions.html',
  'track.html',
  'manifest.json',
  'favicon.svg'
];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

for (const file of pages) {
  if (existsSync(new URL('../' + file, import.meta.url))) {
    await cp(new URL('../' + file, import.meta.url), new URL('../www/' + file, import.meta.url));
  }
}

if (existsSync(new URL('../assets/', import.meta.url))) {
  await cp(new URL('../assets/', import.meta.url), new URL('../www/assets/', import.meta.url), { recursive: true });
}

console.log('Prepared AKARRA web bundle in ./www');
