import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blog = useLoaderData();
  const { image, description, title, author, date } = blog;

  return (
    <div className=" space-y-4 p-10 md:ml-44 mt-10">
      <img className="rounded-lg" src={image} alt="" />
      <div>
        <h3 className="font-semibold">{author}</h3>
        <p>{date}</p>
      </div>
      <div>
        <h1 className="text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
