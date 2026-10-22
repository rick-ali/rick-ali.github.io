import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const resource = z.object({
  label: z.string().min(1),
  url: z.string().refine(value => value.startsWith('/') && !value.startsWith('//') || /^https:\/\//.test(value), 'Use an https:// URL or a local /files/ path.'),
});
const common = {
  title: z.string().min(1),
  summary: z.string().min(1),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  order: z.number().default(100),
  links: z.array(resource).default([]),
};

export const collections = {
  research: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
    schema: z.object({
      ...common,
      authors: z.array(z.string()).min(1),
      year: z.number().int(),
      venue: z.string().min(1),
      topic: z.string(),
      image: z.string().startsWith('/').optional(),
      imageAlt: z.string().optional(),
      imageCaption: z.string().optional(),
      imageSource: z.url().optional(),
    }).refine(item => !item.image || Boolean(item.imageAlt), { message: 'Add imageAlt when supplying an image.' }),
  }),
  teaching: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/teaching' }),
    schema: z.object({ ...common, role: z.string(), institution: z.string(), period: z.string(), year: z.number().int() }),
  }),
  talks: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
    schema: z.object({ ...common, date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).refine(value => { const date = new Date(value); return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value; }, 'Use a valid YYYY-MM-DD date.'), kind: z.string(), event: z.string(), location: z.string(), thumbnail: z.string().startsWith('/').optional() }),
  }),
};
