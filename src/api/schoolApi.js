import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const schoolApi = createApi({
  reducerPath: 'schoolApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    getSchool: build.query({
      query: (school_id) => `schools/${school_id}`,
    }),
  }),
});

export const { useGetSchoolQuery } = schoolApi;
