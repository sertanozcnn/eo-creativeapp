import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const aboutOneSectionApi = createApi({
  reducerPath: "aboutOneSectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAboutOneSections: builder.query({
      query: () => "/about-one-section/all",
    }),
  }),
});

export const { useGetAboutOneSectionsQuery } = aboutOneSectionApi;
