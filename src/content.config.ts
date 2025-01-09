// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 3. Define your collection(s)
const journal = defineCollection({});

const projects = defineCollection({});

const misc = defineCollection({});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { journal, projects, misc };
