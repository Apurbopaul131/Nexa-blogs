"use server";
import { redirect } from "next/navigation";

export const createBlogPost = async (blogData: FormData) => {
  const newData = Object.fromEntries(blogData.entries());

  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData), // body data type must match "Content-Type" header
  });
  const result = await res.json();
  if (result?.id) {
    redirect(`/blogs/${result?.id}`);
  }
  return result;
};
