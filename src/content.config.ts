import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Heaven Designs'),
    readTime: z.string().optional(),
    heroImage: z.string(),
    tags: z.array(z.string()).default([]),
    canonical: z.string().url().optional(),
  }),
});

export const collections = { blog };
