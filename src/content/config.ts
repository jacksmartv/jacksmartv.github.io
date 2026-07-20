import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
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
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    relatedWork: z.string().optional(),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    readingTime: z.string(),
    category: z.string(),
  }),
});

export const collections = { work, architecture, articles };
