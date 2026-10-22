import type { APIRoute } from 'astro';
import { loadContent, href, entryHref } from '../lib/content';
export const GET: APIRoute = async ({ site }) => {
  const content = await loadContent();
  const paths = ['', 'research/', 'teaching/', 'talks/'].map(href).concat(Object.values(content).flat().map(entryHref));
  const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${escape(new URL(path, site).href)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
