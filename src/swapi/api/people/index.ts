import type { PeopleRequestQuery, PeopleResponse } from "@/types/swapi/people";

export type Methods = {
  get: {
    query?: PeopleRequestQuery;
    resBody: PeopleResponse;
  };
}
