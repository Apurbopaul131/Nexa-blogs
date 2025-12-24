import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "/blogs",
    }),
    getSingleBlog: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
  }),
});

export const { useGetBlogsQuery, useGetSingleBlogQuery } = blogApi;
