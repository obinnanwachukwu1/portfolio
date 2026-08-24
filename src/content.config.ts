import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.coerce.date(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    order: z.number(),
    stats: z.array(z.string()).default([]),
    links: z
      .array(z.object({
        key: z.string(),
        label: z.string(),
        url: z.string(),
      }))
      .default([]),
    stack: z.array(z.string()).default([]),
  }),
});

export const collections = { writing, projects };
