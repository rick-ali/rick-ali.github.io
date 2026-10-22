import { getCollection, type CollectionEntry } from 'astro:content';

export const href = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const resourceHref = (path: string) => path.startsWith('/') ? href(path) : path;
export const entryHref = (entry: CollectionEntry<'research' | 'teaching' | 'talks'>) => href(`${entry.collection}/${entry.id}/`);
export const dateParts = (value: string) => {
  const date = new Date(`${value}T12:00:00Z`);
  return { day: value.slice(8, 10), month: date.toLocaleDateString('en-GB', { month: 'short', timeZone: 'UTC' }), year: value.slice(0, 4) };
};
export const longDate = (value: string) => new Date(`${value}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export async function loadContent() {
  const [research, teaching, talks] = await Promise.all([
    getCollection('research', ({ data }) => !data.draft),
    getCollection('teaching', ({ data }) => !data.draft),
    getCollection('talks', ({ data }) => !data.draft),
  ]);
  research.sort((a, b) => b.data.year - a.data.year || a.data.order - b.data.order || a.id.localeCompare(b.id));
  teaching.sort((a, b) => b.data.year - a.data.year || a.data.order - b.data.order || a.id.localeCompare(b.id));
  talks.sort((a, b) => b.data.date.localeCompare(a.data.date) || a.id.localeCompare(b.id));
  return { research, teaching, talks };
}
