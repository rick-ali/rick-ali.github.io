import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

// Verify the actual exported site, including paths used by GitHub Pages.
const root = path.resolve('dist');
const site = JSON.parse(await readFile('src/data/site.json', 'utf8'));
const base = (process.env.SITE_BASE || '/').replace(/\/$/, '');
const errors = [];
async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory() ? walk(path.join(directory, entry.name)) : path.join(directory, entry.name)))).flat();
}
const files = await walk(root);
const pages = new Map();
for (const file of files.filter(file => file.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) errors.push(`${file}: duplicate element IDs`);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) errors.push(`${file}: expected one h1`);
  if (!html.includes('name="description"')) errors.push(`${file}: missing description`);
  if (!html.includes('rel="canonical"')) errors.push(`${file}: missing canonical URL`);
  if (/window\.openai|codex-visualization|data-lucide|localhost:\d/.test(html)) errors.push(`${file}: preview-only code found`);
  pages.set(file, { html, ids });
}
for (const [file, { html }] of pages) {
  const relative = path.relative(root, file).split(path.sep).join('/');
  const pageUrl = new URL(`${base}/${relative.replace(/index\.html$/, '')}`, site.url);
  for (const match of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    const raw = match[1].replaceAll('&amp;', '&');
    if (!raw) { errors.push(`${relative}: empty link`); continue; }
    if (/^(?:https?:|mailto:|data:)/.test(raw)) continue;
    const url = new URL(raw, pageUrl);
    if (base && !url.pathname.startsWith(`${base}/`)) { errors.push(`${relative}: link escapes deployment base: ${raw}`); continue; }
    const local = decodeURIComponent(url.pathname.slice(base.length));
    let target = path.join(root, local);
    try {
      if ((await stat(target)).isDirectory()) target = path.join(target, 'index.html');
      await stat(target);
      if (url.hash && pages.has(target) && !pages.get(target).ids.includes(decodeURIComponent(url.hash.slice(1)))) errors.push(`${relative}: missing anchor ${raw}`);
    } catch { errors.push(`${relative}: missing asset/page ${raw}`); }
  }
}
for (const route of ['index.html', 'research/index.html', 'teaching/index.html', 'talks/index.html', 'publications/index.html', '404.html', 'sitemap.xml', 'robots.txt', '.nojekyll']) {
  assert(files.includes(path.join(root, route)), `Missing ${route}`);
}
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
assert(sitemap.includes(`${site.url}${base}/research/`), 'Sitemap must use the configured deployment URL');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`Verified ${pages.size} static pages: local links, anchors, assets, metadata, unique IDs, and deployment paths.`);
