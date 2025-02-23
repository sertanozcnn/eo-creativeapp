import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const commentMeetApi = createApi({
  reducerPath: "commentMeetApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCommentMeets: builder.query({
      query: () => "/comment",
    }),
  }),
});

export const { useGetCommentMeetsQuery } = commentMeetApi;
