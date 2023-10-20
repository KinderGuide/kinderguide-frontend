import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '../utils/constants';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // const token = getState().auth.token;
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: 'me/',
      }),
      providesTags: ['Users'],
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: 'me/',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
