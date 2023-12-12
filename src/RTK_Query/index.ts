import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const blogApi = createApi({
  reducerPath: 'blogApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3002/api/',
  }),

  endpoints: (builder) => ({

    toRegister: builder.query<null, { username: string, password: string }>({
      query: ({ username, password }) => ({
        url: 'auth/register/',
        method: 'POST',
        body: { username, password },
      }),
    }),

  })
})

export const { useToRegisterQuery } = blogApi
