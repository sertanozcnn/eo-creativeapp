import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_BASE_URL;

export const contactRequestCreateApi = createApi({
  reducerPath: "contactRequestCreateApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    createContactRequest: builder.mutation({
      query: (newRequest) => ({
        url: "/contact-requests",
        method: "POST",
        body: newRequest,
      }),
    }),
  }),
});

export const { useCreateContactRequestMutation } = contactRequestCreateApi;
