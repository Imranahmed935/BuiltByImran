import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/Blog" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="max-w-6xl mx-auto flex justify-between items-center  mt-4 p-2 rounded-full">
      <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
        BuiltByImran
      </h1>
      <ul className="hidden md:flex gap-8 dark:text-gray-700 font-medium">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) => {
                return isActive ? "text-blue-600" : "";
              }}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="md:flex gap-4 cursor-pointer text-2xl hidden">
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

      {/* Hamburger menu */}
      <div
        className="md:hidden text-3xl text-blue-700"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <HiX className="text-red-600" /> : <HiMenuAlt3 />}
      </div>

      {openMenu && (
        <div className="absolute top-24 right-4 text-left w-[70%] bg-gray-200 p-4 rounded-xl shadow-lg md:hidden flex flex-col gap-3 text-gray-800 font-medium ">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpenMenu(false)}
              className={({ isActive }) => {
                return isActive ? "text-blue-600" : "";
              }}
            >
              {link.name}
            </NavLink>
          ))}
          <button className=" border border-blue-700 px-5 py-2 rounded-full hover:bg-blue-800 hover:text-white dark:text-gray-700 transition duration-300">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
