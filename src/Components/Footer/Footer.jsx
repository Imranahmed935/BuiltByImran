import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between items-center py-6">
      <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
        BuiltByImran
      </h1>
      <p className="text-center text-sm lg:text-base mt-4 ">
        © {new Date().getFullYear()} - Imran Ahmed. All rights reserved.
      </p>
      <div className="md:flex gap-4 cursor-pointer text-2xl ml-20 hidden">
        <a
          href="https://www.linkedin.com/in/imran-ahmed-frontend-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-black transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/Imranahmed935"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-gray-800 transition"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
