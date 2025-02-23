import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const socialLinkApi = createApi({
  reducerPath: "socialLinkApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getSocialLinks: builder.query({
      query: () => "/social-link",
    }),
  }),
});

export const { useGetSocialLinksQuery } = socialLinkApi;
