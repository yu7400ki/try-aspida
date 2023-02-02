import { useState, useMemo } from "react";
import { fetchPeople } from "@/domains/fetchPeople";
import { useFetch } from "./useFetch";

export const useFetchPeople = (page: number = 1) => {
  const [currentPage, setCurrentPage] = useState(page);
  const fetcher = useMemo(() => {
    return () => fetchPeople({ page: currentPage });
  }, [currentPage]);
  const { data, error, isLoading } = useFetch(fetcher);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  return { data, error, isLoading, nextPage, prevPage };
};
