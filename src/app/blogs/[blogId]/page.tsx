import BlogDetailsCard from "@/components/ui/BlogDetailsCard";
import { Blog } from "@/types";

export const generateStaticParams = async () => {
  const res = await fetch(`http://localhost:5000/blogs`);
  const blogs = await res.json();
  return blogs?.slice(0, 3).map((blog: Blog) => ({
    blogId: blog.id,
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  console.log(blogId);
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = (await res.json()) as Blog;
  return {
    title: blog?.title,
    description: blog?.description,
  };
};
const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();

  return (
    <div className="my-5">
      <BlogDetailsCard blog={blog}></BlogDetailsCard>
    </div>
  );
};

export default SingleBlogPage;
