import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const designServiceTwoSectionApi = createApi({
  reducerPath: "designServiceTwoSectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getDesignServiceTwoSections: builder.query({
      query: () => "/design-service-two",
    }),
  }),
});

export const { useGetDesignServiceTwoSectionsQuery } =
  designServiceTwoSectionApi;
