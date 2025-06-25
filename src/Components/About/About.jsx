import { Link } from "react-router-dom";
import aboutImg from "../../assets/aboutImge.png";
const About = () => {
  return (
    <div className="py-20 ">
      <h1 className="text-left md:text-4xl text-2xl font-semibold">About Me</h1>
      <h3 className="text-left">The Developer Behind the code.</h3>
      <div className="md:py-14 py-4 md:flex gap-6 ">
        <div className=" md:w-3/5 h-auto w-full rounded-md space-y-4 text-left">
          <img src={aboutImg} alt="" />
        </div>
        <div className=" md:w h-auto w-full rounded-md p-4 text-justify">
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
