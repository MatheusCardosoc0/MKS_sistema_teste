import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {  QueryProducts } from '../utils/interfaces'

export const ApiProducts = createApi({
  reducerPath: 'ApiProducts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mks-challenge-api-frontend.herokuapp.com'
  }),
  endpoints: builder => ({
    getProducts: builder.query<QueryProducts, void>({query: () => `/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC`})
  })
})

export const {useGetProductsQuery} = ApiProducts