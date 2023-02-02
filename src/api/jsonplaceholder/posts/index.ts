import type { Posts, PostsRequestQuery } from "@/types/jsonplaceholder/posts";

export type Methods = {
  get: {
    query?: PostsRequestQuery;
    resBody: Posts;
  };
};
