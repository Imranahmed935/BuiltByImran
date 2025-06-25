import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  const { id, title, description, liveLink, image } = project;
console.log(project)
  return (
    <div className="border border-blue-500 p-3 rounded-lg">
      <div>
        <img className="w-full h-72 rounded" src={image} alt="" />
      </div>
      <div className="space-y-2 py-4">
        <h1 className="text-left text-2xl">{title}</h1>
        <p className="text-left">{description}</p>
      </div>
      <div className="flex gap-4">
        <a href={liveLink}>
          <button className="bg-blue-700 px-10 py-2 rounded text-white flex items-center gap-2">
            Live Link
          </button>
        </a>
        <Link to={`/details/${id}`}>
          <button className=" border border-blue-700 px-5 py-2 rounded-full hover:bg-blue-700 hover:text-white dark:text-gray-700 transition duration-300 flex items-center gap-2">
            Details <IoArrowForward />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
