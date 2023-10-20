import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const kindergartenReviewsApi = createApi({
  reducerPath: 'kindergartenReviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getKindergartenReviews: build.query({
      query: (kindergarten_id) => `kindergartens/${kindergarten_id}/reviews/`,
    }),
  }),
});

export const { useGetKindergartenReviewsQuery } = kindergartenReviewsApi;
