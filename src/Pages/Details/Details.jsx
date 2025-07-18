import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const {
    title,
    topFeatures,
    description,
    liveLink,
    image,
    gitHubLink,
    techStack,
  } = details;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Image */}
      <div className="mb-10">
        <img
          src={image}
          alt={title}
          className="w-full h-auto rounded-xl shadow-lg"
        />
      </div>

      {/* Title & Description */}
      <div className="space-y-6 text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
          {title}
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>

        {/* Tech Stack */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {techStack?.map((tech, i) => (
              <span
                key={i}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Top Features */}
        {topFeatures?.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              Top Features
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {topFeatures.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow transition duration-300"
          >
            Live Site
          </a>
          <a
            href={gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-md shadow transition duration-300"
          >
            GitHub Repo
          </a>
          <Link to="/">
            <button className="underline text-blue-600 font-medium">
              ← Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
