import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const shadekoApi = createApi({
  reducerPath: 'shadekoApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337/api/',
  }),

  endpoints: (builder) => ({

    getCategories: builder.query<string, string>({
      query: (name) => `/${name}?populate=*`
    }),

  })
})

export const { useGetCategoriesQuery } = shadekoApi
