import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const questionSectionTwoApi = createApi({
  reducerPath: "questionSectionTwoApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getQuestionSectionTwos: builder.query({
      query: () => "/question-two",
    }),
  }),
});

export const { useGetQuestionSectionTwosQuery } = questionSectionTwoApi;
