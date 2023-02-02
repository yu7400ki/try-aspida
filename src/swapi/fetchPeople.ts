import { client } from "@/libs/aspida";
import type { PeopleRequestQuery, PeopleResponse } from '@/types/swapi/people';
import { peopleRequestQuerySchema, peopleResponseSchema } from "@/types/swapi/people";

export const fetchPeople = async (query: PeopleRequestQuery): Promise<PeopleResponse> => {
  console.log("fetchPeople", query);
  peopleRequestQuerySchema.parse(query);
  const response = await client.api.people.$get({ query });
  return peopleResponseSchema.parse(response);
}
