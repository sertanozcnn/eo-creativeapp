import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const aboutImageSectionApi = createApi({
  reducerPath: "aboutImageSectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAboutImageSections: builder.query({
      query: () => "/about-image-section/all",
    }),
  }),
});

export const { useGetAboutImageSectionsQuery } = aboutImageSectionApi;
