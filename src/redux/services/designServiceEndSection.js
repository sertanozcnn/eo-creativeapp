import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const designServiceEndSectionApi = createApi({
  reducerPath: "designServiceEndSectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getDesignServiceEndSections: builder.query({
      query: () => "/design-service-end//all",
    }),
  }),
});

export const { useGetDesignServiceEndSectionsQuery} = designServiceEndSectionApi;
