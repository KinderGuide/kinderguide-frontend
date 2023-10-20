import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const kindergartenApi = createApi({
  reducerPath: 'kindergartenApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getKindergarten: build.query({
      query: (kindergarten_id) => `v1/kindergartens/${kindergarten_id}/`,
    }),
  }),
});

export const { useGetKindergartenQuery } = kindergartenApi;
