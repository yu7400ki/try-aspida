import { useCallback } from "react";
import { fetchPosts } from "@/api/jsonplaceholder/fetchPosts";
import { useFetch } from "./useFetch";

export const useFetchPosts = (userId: number | null = null) => {
  const fetcher = useCallback(
    () =>
      fetchPosts(
        userId !== null
          ? {
              userId: userId,
            }
          : {}
      ),
    [userId]
  );
  return useFetch(fetcher);
};
