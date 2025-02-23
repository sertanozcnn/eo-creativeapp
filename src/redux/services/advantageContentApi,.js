import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const advantageContentApi = createApi({
  reducerPath: "advantageContentApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAdvantageContents: builder.query({
      query: () => "/advantage-content",
    }),
  }),
});

export const { useGetAdvantageContentsQuery } = advantageContentApi;
