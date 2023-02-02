import { useCallback } from "react";
import { fetchComments } from "@/api/jsonplaceholder/fetchComments";
import { useFetch } from "./useFetch";

export const useFetchComments = (postId: number) => {
  const fetcher = useCallback(() => fetchComments(postId), [postId]);
  return useFetch(fetcher);
};
