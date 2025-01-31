import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Çevre değişkeninden BASE_URL'i oku
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const blogApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchBlogs: builder.query({
      query: ({ search = "", category = "", location = "" }) =>
        `/blogs?search=${search}&category=${category}&location=${location}`,
    }),
    fetchBlogById: builder.query({ query: (id) => `/blogs/${id}` }),
  }),
});

export const { useFetchBlogsQuery, useFetchBlogByIdQuery } = blogApi;
