import { Link } from "react-router-dom";
import aboutImg from "../../assets/aboutImge.png";
const About = () => {
  return (
    <div className=" ">
      <div className="md:mb-24 mb-10 py-4 md:flex gap-6 shadow-lg">
        <div
          data-aos="flip-left"
          className=" md:w-3/5 h-auto w-full  space-y-4 text-left"
        >
          <img src={aboutImg} alt="" />
        </div>
        <div
          data-aos="zoom-in"
          className=" md:w h-auto w-full rounded-md p-4 text-justify"
        >
          <h1 className="text-left text-2xl font-semibold">
            About Me
          </h1>
          <h1>Hi I'm Imran Ahmed</h1>
          <h3 className="text-2xl font-semibold">Full Stack Developer.</h3>
          <p className="py-4">
            A dedicated Full Stack Developer with a focus on building
            responsive, interactive, and user-centric web interfaces. My
            expertise spans across React, TailwindCSS, JavaScript, express,
            mongodb, mongoose and various modern web technologies. Outside of
            work, I’m a coffee enthusiast with a deep passion for movies,
            reading, and continuously expanding my skill set. I’m always eager
            to connect and collaborate on innovative projects. Let’s build
            something exceptional together.
          </p>
          <Link to={"/contact"}>
            <button className="bg-blue-700 rounded px-10 py-2 text-white flex items-center gap-2">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
