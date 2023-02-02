import { useCallback } from "react";
import { fetchPost } from "@/api/jsonplaceholder/fetchPost";
import { useFetch } from "./useFetch";

export const useFetchPost = (id: number) => {
  const fetcher = useCallback(() => fetchPost(id), [id]);
  return useFetch(fetcher);
};
