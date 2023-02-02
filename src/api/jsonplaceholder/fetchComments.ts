import { jsonplaceholderClient as client } from "@/libs/aspida";
import type { Comments } from "@/types/jsonplaceholder/comments";
import { commentsSchema } from "@/types/jsonplaceholder/comments";

export const fetchComments = async (postId: number): Promise<Comments> => {
  console.log("fetchComments", postId);
  const res = await client.posts._id(postId).comments.$get();
  return commentsSchema.parse(res);
};
