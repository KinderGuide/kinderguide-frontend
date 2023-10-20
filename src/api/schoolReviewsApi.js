import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const schoolReviewsApi = createApi({
  reducerPath: 'schoolReviewsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getSchoolReviews: build.query({
      query: (school_id) => `schools/${school_id}/reviews/`,
    }),
  }),
});

export const { useGetSchoolReviewsQuery } = schoolReviewsApi;
