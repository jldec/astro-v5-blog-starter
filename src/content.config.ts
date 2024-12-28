import { glob } from 'astro/loaders';
import { defineCollection, z, type CollectionEntry } from 'astro:content';

const blog = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: ['!index.md', '*.md'],
  }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      draft: z.boolean().nullable().optional(),
      image: z.object({
        src: image(),
        alt: z.string().nullable().optional(),
      }),
    }),
});

export const collections = { blog };

const isDev = import.meta.env.DEV;

export const sortPostsByDate = (
  a: CollectionEntry<'blog'>,
  b: CollectionEntry<'blog'>
) => {
  return a.data.date.valueOf() - b.data.date.valueOf();
};

export const sortPostsByDateReverse = (
  a: CollectionEntry<'blog'>,
  b: CollectionEntry<'blog'>
) => {
  return b.data.date.valueOf() - a.data.date.valueOf();
};

export const filterAllPosts = (post: CollectionEntry<'blog'>) => {
  return !post.data.draft || isDev;
};
