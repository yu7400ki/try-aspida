import { z } from "zod";

export const commentSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  body: z.string(),
  postId: z.number(),
});

export type Comment = z.infer<typeof commentSchema>;

export const commentsSchema = z.array(commentSchema);

export type Comments = z.infer<typeof commentsSchema>;