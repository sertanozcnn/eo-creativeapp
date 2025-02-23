import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const aboutAdvantageContentTwoApi = createApi({
  reducerPath: "aboutAdvantageContentTwoApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAboutAdvantageContentTwos: builder.query({
      query: () => "/about-advantage-content-two",
    }),
  }),
});

export const { useGetAboutAdvantageContentTwosQuery } =
  aboutAdvantageContentTwoApi;
