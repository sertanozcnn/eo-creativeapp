import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const teamMeetImageApi = createApi({
  reducerPath: "teamMeetImageApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getTeamMeetImages: builder.query({
      query: () => "/image-meet",
    }),
  }),
});

export const { useGetTeamMeetImagesQuery } = teamMeetImageApi;
