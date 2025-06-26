import { useEffect, useState } from "react";
import BlogCard from "../../Components/BlogCard/BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("/Blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div >
      <div className="py-10">
        <h1 className="text-left md:text-3xl text-2xl font-semibold mt-6">
          welcome to Blog page
        </h1>
        <h3 className="text-left text-lg">
          here you can see everything about this project.
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-6">
        {blogs?.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
