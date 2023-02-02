import { useState, useEffect } from "react";

export const useFetch = <T>(
  fetcher: () => Promise<T>,
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let ignore = false;

    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await fetcher();
        if (ignore) return;
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          if (ignore) return;
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetch();

    return () => {
      ignore = true;
    };
  }, [fetcher]);

  return { data, error, isLoading };
}
