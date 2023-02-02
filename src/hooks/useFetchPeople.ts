import { useState, useCallback } from "react";
import { fetchPeople } from "@/swapi/fetchPeople";
import { useFetch } from "./useFetch";

export const useFetchPeople = (page: number = 1) => {
  const [currentPage, setCurrentPage] = useState(page);
  const fetcher = useCallback(() => fetchPeople({
    page: currentPage,
  }), [currentPage]);
  const { data, error, isLoading } = useFetch(fetcher);

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => prev + 1);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => prev - 1);
  }, []);

  return { data, error, isLoading, nextPage, prevPage };
};
