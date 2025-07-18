import developerImg from "../../assets/develop.webp";

import Aos from "aos";

import bgImage from "../../assets/bgImage.png";
import bg from "../../assets/skills/bg.jpg"

const Banner = () => {
  return (
    <div className={`${bg}`}>
      <div className="flex flex-col md:flex-row items-center gap-4 py-6 ">
        <div
          data-aos="fade-right"
          className=" md:w-1/2 h-auto w-full rounded-md space-y-6 text-left"
        >
          <h3 className="text-2xl">
            I'm a <span className="text-pink-">Full Stack Developer</span>
          </h3>
          <h1 className="md:text-4xl text-4xl font-bold">
            Turning Ideas Into Web Solutions.
          </h1>
          <p className="text-lg leading-relaxed">
            I develop Seamless user experiences and robust Backend logic for
            modern web Apps.
          </p>

          <div className="flex gap-4">
            <div>
              <a
                href="https://drive.google.com/uc?export=download&id=1ai2ilyC7sfjRpcAqQYXPpmjlS8umMPak"
                download
                className=" bg-blue-700 px-10 py-2 rounded text-white"
              >
                Hire Me
              </a>
            </div>
            <div>
              <a
                href="#project"
                className=" border border-blue-700 px-5 py-2 rounded-full hover:bg-blue-800 hover:text-white dark:text-gray-700 transition duration-300"
              >
                Latest Projects
              </a>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="md:w-1/2 w-full rounded-md z-20">
          <img className="w-full" src={developerImg} alt="" />
        </div>
      </div>
      <div className="w-full hidden md:block">
        <img className="-mt-64" src={bgImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
