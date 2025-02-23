import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const aboutAdvantageContentOneApi = createApi({
  reducerPath: "aboutAdvantageContentOneApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAboutAdvantageContentOnes: builder.query({
      query: () => "/about-advantage-content",
    }),
  }),
});

export const { useGetAboutAdvantageContentOnesQuery } =
  aboutAdvantageContentOneApi;
