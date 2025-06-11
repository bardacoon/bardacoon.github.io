import { defineCollection, reference, z } from "astro:content";

import { glob, file } from "astro/loaders";

const blog = defineCollection({
    loader: glob({
        pattern: ["**/*.md", "**/*.mdx"],
        base: "src/content/blog",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        tags: z.array(reference("tags")).optional(),
        pubDate: z.coerce.date(),
    }),
});

const tags = defineCollection({
    loader: file("src/content/tags.json"),
    schema: z.object({
        name: z.string(),
    }),
});

export const collections = { blog, tags };
