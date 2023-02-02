import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './api/people'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://swapi.dev' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/people'
  const GET = 'GET'

  return {
    api: {
      people: {
        get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
