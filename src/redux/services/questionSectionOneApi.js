import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const questionSectionOneApi = createApi({
  reducerPath: "questionSectionOneApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getQuestionSectionOnes: builder.query({
      query: () => "/question-one",
    }),
  }),
});

export const { useGetQuestionSectionOnesQuery } = questionSectionOneApi;
