import { defineCollection, z } from "astro:content";

const journal = defineCollection({
  schema: z.object({
    title: z.string(),
    created_at: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    site: z.string(),
    repo: z.string(),
    stack: z.string(),
    description: z.string(),
    created_at: z.string(),
  }),
});

const misc = defineCollection({});

export const collections = { journal, projects, misc };
