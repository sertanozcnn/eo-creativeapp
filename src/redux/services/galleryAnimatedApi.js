import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const galleryAnimatedApi = createApi({
  reducerPath: "galleryAnimatedApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getGalleryAnimateds: builder.query({
      query: () => "/animatedGallery",
    }),
  }),
});

export const { useGetGalleryAnimatedsQuery } = galleryAnimatedApi;
