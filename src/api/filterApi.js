import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const filterApi = createApi({
  reducerPath: 'filterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (build) => ({
    getFilteredData: build.query({
      query: ([category = '', params = '']) =>
        `${category}${params ? '?' + params : ''}`,
    }),
  }),
});

export const { useGetFilteredDataQuery } = filterApi;
