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
  <a
    href="https://drive.google.com/uc?export=download&id=1L9SILlAfl-DllQfKzCaqlZr2z-Koy3Er"
    download
    className="relative overflow-hidden bg-blue-700 lg:px-10 py-2 rounded text-white
               transition-all duration-300
               hover:scale-105
               hover:shadow-[0_0_30px_rgba(59,130,246,0.9)]
               active:scale-95"
  >

    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r 
                     from-transparent via-white/40 to-transparent
                     hover:translate-x-full transition-transform duration-700" />
    <span className="relative z-10 ">Download Resume</span>
  </a>
  <a
    href="#project"
    className="relative px-6 py-2 rounded-full border border-blue-700
               text-blue-600 dark:text-gray-700
               transition-all duration-300
               hover:bg-blue-700 hover:text-white
               hover:shadow-[0_0_25px_rgba(59,130,246,0.8)]
               hover:scale-105
               active:scale-95"
  >
    Latest Projects
  </a>
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
