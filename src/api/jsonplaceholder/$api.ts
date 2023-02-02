import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './posts'
import type { Methods as Methods1 } from './posts/_id@number'
import type { Methods as Methods2 } from './posts/_id@number/comments'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://jsonplaceholder.typicode.com' : baseURL).replace(/\/$/, '')
  const PATH0 = '/posts'
  const PATH1 = '/comments'
  const GET = 'GET'

  return {
    posts: {
      _id: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          comments: {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody']>(prefix, `${prefix1}${PATH1}`, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody']>(prefix, `${prefix1}${PATH1}`, GET, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`
          },
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { query?: Methods0['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
