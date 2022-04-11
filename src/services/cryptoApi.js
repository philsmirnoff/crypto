import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '9973d4d458msh3093964e4eb1947p12b1b1jsn021aaeb8292e',

};


const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
  url, headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('./coins'),
      //  query: (count) => createRequest(`/coins?limit=${count}`),
    })
})
})
// redux toolkit creates a hook to get the data from all the query
export const {
  useGetCryptosQuery
} = cryptoApi;

