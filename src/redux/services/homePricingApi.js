import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const homePricingApi = createApi({
  reducerPath: "homePricingApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getHomePricings: builder.query({
      query: () => "/homepricing/all",
    }),
  }),
});

export const { useGetHomePricingsQuery } = homePricingApi;
