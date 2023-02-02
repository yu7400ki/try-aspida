import { useFetchPeople } from "@/hooks";
import type { People } from "@/types/swapi/people";
import { useMemo } from "react";

export const Home = () => {
  const { data, isLoading, nextPage, prevPage } = useFetchPeople();
  const people: People = useMemo(() => data?.results ?? [], [data]);
  const hasPrevPage = useMemo(() => data?.previous !== null, [data]);
  const hasNextPage = useMemo(() => data?.next !== null, [data]);

  return (
    <div>
      <h1>People</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {people.map((person) => (
            <li key={person.name}>
              <p>{person.name}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={prevPage} disabled={isLoading || !hasPrevPage}>Prev</button>
      <button onClick={nextPage} disabled={isLoading || !hasNextPage}>Next</button>
    </div>
  );
};
