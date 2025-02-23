import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const brandContactApi = createApi({
  reducerPath: "brandContactApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getBrandContacts: builder.query({
      query: () => "/brand-contact",
    }),
  }),
});

export const { useGetBrandContactsQuery } = brandContactApi;
