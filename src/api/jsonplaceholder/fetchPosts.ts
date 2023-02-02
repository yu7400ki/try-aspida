import { jsonplaceholderClient as client } from "@/libs/aspida";
import type { Posts, PostsRequestQuery } from "@/types/jsonplaceholder/posts";
import { postsSchema, postsRequestQuerySchema } from "@/types/jsonplaceholder/posts";

export const fetchPosts = async (query: PostsRequestQuery): Promise<Posts> => {
  console.log("fetchPosts", query);
  postsRequestQuerySchema.parse(query);
  const res = await client.posts.$get({ query });
  return postsSchema.parse(res);
};