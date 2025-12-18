import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/types";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  console.log(blogs);
  return (
    <div className="my-5">
      <h1 className="text-3xl text-center my-5 font-bold">
        Latest Blogs From <span className="text-teal-600">NexaBlog</span>
      </h1>
      <p className="text-center text-gray-400 w-2/5 mx-auto">
        <i>
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto my-2">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
