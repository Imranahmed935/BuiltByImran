import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
  const { id, title, description, techStack, liveLink, image } = project;

  return (
    <div
      data-aos="flip-left"
      className="rounded-lg border border-[#6cd0dbb9] bg-[#E6F4F8] p-4"
    >
      {/* Image */}
      <div className="overflow-hidden rounded-md">
        <img
          className="w-full h-60 object-cover rounded-md hover:scale-105 transition-transform duration-300"
          src={image}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="space-y-3 py-4">
        <h2 className="text-xl font-semibold text-blue-800">{title}</h2>
        <p className="text-gray-700 text-sm line-clamp-2">{description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack?.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs bg-white text-black px-2 py-1 rounded-full font-medium border border-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-6 py-2 rounded text-sm font-medium hover:bg-blue-800 transition duration-300"
          >
            Live Link
          </a>

          <Link to={`/details/${id}`}>
            <button className="flex items-center gap-2 border border-blue-700 text-blue-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 hover:text-white transition duration-300">
              Details <IoArrowForward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
