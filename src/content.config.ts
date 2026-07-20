import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    role: z.string(),
    duration: z.string(),
    team: z.string(),
    stack: z.array(z.string()),
    impact: z.array(z.string()),
    problem: z.string(),
    constraints: z.array(z.string()),
  }),
});

const architecture = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/architecture' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    relatedWork: z.string().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    readingTime: z.string(),
    category: z.string(),
  }),
});

export const collections = { work, architecture, articles };
