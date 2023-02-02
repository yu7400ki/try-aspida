import { z } from "zod";

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

export type Post = z.infer<typeof postSchema>;

export const postsSchema = z.array(postSchema);

export type Posts = z.infer<typeof postsSchema>;

export const postsRequestQuerySchema = z.object({
  userId: z.number().optional(),
});

export type PostsRequestQuery = z.infer<typeof postsRequestQuerySchema>;
