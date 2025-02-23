import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const homeRightApi = createApi({
  reducerPath: "homeRightApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getHomeRights: builder.query({
      query: () => "/homeright/all",
    }),
  }),
});

export const { useGetHomeRightsQuery } = homeRightApi;
