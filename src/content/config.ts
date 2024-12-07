import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date().transform((date) => date.toISOString().split("T")[0]),
    description: z.string(),
    lastModified: z.string().optional(),
    cover: image(),
    coverAlt: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
  }),
});

export const collections = { posts };
