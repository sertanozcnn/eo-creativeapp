import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const imageSectionApi = createApi({
  reducerPath: "imageSectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getImageSections: builder.query({
      query: () => "/image-sections",
    }),
  }),
});

export const { useGetImageSectionsQuery } = imageSectionApi;
