import { jsonplaceholderClient as client } from "@/libs/aspida";
import type { Post } from "@/types/jsonplaceholder/posts";
import { postSchema } from "@/types/jsonplaceholder/posts";

export const fetchPost = async (id: number): Promise<Post> => {
  console.log("fetchPost", id);
  const res = await client.posts._id(id).$get();
  return postSchema.parse(res);
}
