import { useState, useEffect } from "react";

export const useFetch = <T>(
  fetcher: () => Promise<T>,
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await fetcher();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, [fetcher]);

  return { data, error, isLoading };
}
