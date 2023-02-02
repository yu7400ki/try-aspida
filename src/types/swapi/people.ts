import { z } from "zod";

export const personSchema = z.object({
  name: z.string(),
  height: z.string(),
  mass: z.string(),
  hair_color: z.string(),
  skin_color: z.string(),
  eye_color: z.string(),
  birth_year: z.string(),
  gender: z.string(),
  homeworld: z.string().regex(/https:\/\/swapi.dev\/api\/planets\/\d+/),
  films: z.array(z.string().regex(/https:\/\/swapi.dev\/api\/films\/\d+/)),
  species: z.array(z.string().regex(/https:\/\/swapi.dev\/api\/species\/\d+/)),
  vehicles: z.array(z.string().regex(/https:\/\/swapi.dev\/api\/vehicles\/\d+/)),
  starships: z.array(z.string().regex(/https:\/\/swapi.dev\/api\/starships\/\d+/)),
  created: z.string(),
  edited: z.string(),
  url: z.string().regex(/https:\/\/swapi.dev\/api\/people\/\d+/),
});

export type Person = z.infer<typeof personSchema>;

export const peopleSchema = z.array(personSchema);

export type People = z.infer<typeof peopleSchema>;

export const peopleResponseSchema = z.object({
  count: z.number(),
  next: z.string().regex(/https:\/\/swapi.dev\/api\/people\/\?page=\d+/).nullable(),
  previous: z.string().regex(/https:\/\/swapi.dev\/api\/people\/\?page=\d+/).nullable(),
  results: peopleSchema,
});

export type PeopleResponse = z.infer<typeof peopleResponseSchema>;

export const peopleRequestQuerySchema = z.object({
  page: z.number().min(1).max(9),
});

export type PeopleRequestQuery = z.infer<typeof peopleRequestQuerySchema>;
