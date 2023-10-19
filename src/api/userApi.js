import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://kinder.acceleratorpracticum.ru/api/v1/',
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: 'me',
      }),
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: 'me',
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
