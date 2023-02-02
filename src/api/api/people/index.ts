import type { PeopleRequestQuery, PeopleResponse } from "@/types/api/people";

export type Methods = {
  get: {
    query?: PeopleRequestQuery;
    resBody: PeopleResponse;
  };
}
