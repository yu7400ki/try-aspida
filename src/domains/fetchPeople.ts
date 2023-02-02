import { client } from "@/libs/aspida";
import { peopleResponseSchema, peopleRequestQuerySchema } from "@/types/api/people";
import type { PeopleRequestQuery, PeopleResponse } from '@/types/api/people';

export const fetchPeople = async (query: PeopleRequestQuery): Promise<PeopleResponse> => {
  console.log("fetchPeople", query);
  peopleRequestQuerySchema.parse(query);
  const response = await client.api.people.$get({ query });
  return peopleResponseSchema.parse(response);
}
