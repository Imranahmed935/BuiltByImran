import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "#skill" },
    { name: "Projects", path: "#project" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="z-50 relative bg-[#e3f5fa] max-w-6xl mx-auto flex justify-between items-center px-4 py-2 mt-4 rounded-full sticky top-0 shadow">
      <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
        BuiltByImran
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.path}
              className="hover:text-blue-600 transition duration-200"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden md:flex gap-4 text-2xl text-blue-700">
        <a
          href="https://www.linkedin.com/in/imran-ahmed-frontend-developer"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Imranahmed935"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800 transition"
        >
          <FaGithub />
        </a>
      </div>

      {/* Hamburger */}
      <div
        className="md:hidden text-3xl text-blue-700"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <HiX className="text-red-600" /> : <HiMenuAlt3 />}
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-20 right-4 z-50 w-3/4 bg-[#fceeda] p-5 rounded-xl shadow-lg flex flex-col gap-4 font-medium text-gray-800 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setOpenMenu(false)}
              className="hover:text-blue-600 transition duration-200"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://drive.google.com/uc?export=download&id=1ai2ilyC7sfjRpcAqQYXPpmjlS8umMPak"
            download
            className="bg-blue-700 px-5 py-2 rounded text-white text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
