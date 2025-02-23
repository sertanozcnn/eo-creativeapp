import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const brandLogoApi = createApi({
  reducerPath: "brandLogoApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getBrandLogos: builder.query({
      query: () => "/brandlogo",
    }),
  }),
});

export const { useGetBrandLogosQuery } = brandLogoApi;
