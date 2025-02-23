import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const designServiceSectionApi = createApi({
  reducerPath: "designServiceSectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getDesignServiceSections: builder.query({
      query: () => "/design-service/all",
    }),
  }),
});

export const { useGetDesignServiceSectionsQuery } = designServiceSectionApi;
