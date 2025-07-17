import { FaGithub, FaLinkedin } from "react-icons/fa";
import aboutImg from "../../assets/skills/bg_image.png";

const About = () => {
  return (
    <div id="about" className="md:mt-24 px-4">
      <h1 className="text-left text-xl md:text-4xl font-semibold">
        My <br />
        <span className="text-blue-600">Background</span>
      </h1>

      <div className="mt-8 mb-10 md:mb-24 bg-[#E6F4F8] p-6 md:p-6 rounded-lg flex flex-col md:flex-row gap-20 items-center">
        {/* Left image side */}
        <div
          data-aos="flip-left"
          className="md:w-2/5 w-full"
        >
          <img
            src={aboutImg}
            alt="Imran Ahmed Background"
            className="w-full h-auto border-b-8 border-indigo-500 rounded-full"
          />
        </div>

        {/* Right text side */}
        <div
          data-aos="zoom-in"
          className="md:w-3/5 w-full text-justify space-y-4"
        >
          <h1 className="text-lg font-medium text-gray-800">Hi, I'm Imran Ahmed</h1>
          <h3 className="text-2xl font-semibold text-gray-900">Full Stack Developer</h3>
          <p className="text-gray-700">
            A dedicated Full Stack Developer with a focus on building responsive, interactive, and user-centric web interfaces.
            My expertise spans across React, TailwindCSS, JavaScript, Express, MongoDB, Mongoose, and various modern web technologies.
            Outside of work, I’m a coffee enthusiast with a deep passion for movies, reading, and continuously expanding my skill set.
            I’m always eager to connect and collaborate on innovative projects. Let’s build something exceptional together.
          </p>

          <div className="flex items-center gap-10">
            <a
              href="https://drive.google.com/uc?export=download&id=1ai2ilyC7sfjRpcAqQYXPpmjlS8umMPak"
              download
              className="inline-block bg-blue-700 hover:bg-blue-800 transition duration-300 text-white px-8 py-2 rounded-full shadow"
            >
              Hire Me
            </a>
            <div className="hidden md:flex gap-4 text-2xl ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
