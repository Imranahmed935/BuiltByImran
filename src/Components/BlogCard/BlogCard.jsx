import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, image, description, title } = blog;

  return (
    <div className="space-y-4">
      <img
        className="w-96 h-52 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg "
        src={image}
        alt=""
      />
      <h1 className="text-2xl">{title}</h1>
      <p>{description}</p>
      <Link to={`/blogDetails/${id}`}>
        <button className="flex items-center gap-2 mt-4 ">Read more <FaArrowRight className="-rotate-45"/></button>
      </Link>
    </div>
  );
};

export default BlogCard;
