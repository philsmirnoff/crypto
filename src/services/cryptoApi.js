import { createApi, fetchBaseQuery, fetchBaseQuiery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '9973d4d458msh3093964e4eb1947p12b1b1jsn021aaeb8292e'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
  url, headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
  reducePath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endPoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('./exchanges'),
    })
})
})



// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': '9973d4d458msh3093964e4eb1947p12b1b1jsn021aaeb8292e'
//   }
// };
