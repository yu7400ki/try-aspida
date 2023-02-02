import { useMemo } from "react";
import { useFetchPeople } from "@/hooks";
import type { People } from "@/types/api/people";
import styles from "./Home.module.scss";

export const Home = () => {
  const { data, isLoading, nextPage, prevPage } = useFetchPeople();
  const people: People = useMemo(() => data?.results ?? [], [data]);
  const hasPrevPage = useMemo(() => data?.previous !== null, [data]);
  const hasNextPage = useMemo(() => data?.next !== null, [data]);

  return (
    <div className={styles.people}>
      <h1>People</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.person}>
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
