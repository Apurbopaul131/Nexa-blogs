import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;
  console.log(blogId);
  const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
  const blog = await res.json();
  console.log(blog);
  return (
    <div className="my-5">
      <BlogDetailsCard blog={blog}></BlogDetailsCard>
    </div>
  );
};

export default SingleBlogPage;
