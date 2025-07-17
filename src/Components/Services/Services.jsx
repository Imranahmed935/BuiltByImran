import { FaQuestionCircle } from "react-icons/fa";
import { FaMobileScreen, FaPersonBreastfeeding } from "react-icons/fa6";
import { MdDeveloperBoard } from "react-icons/md";

const Services = () => {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-left md:text-4xl text-xl font-semibold">
          Professional <br /> <span className="text-blue-600">Courses</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 py-10 gap-4">
        <div
          data-aos="fade-right"
          className="relative space-y-2 p-6 bg-[#6cd0dbb9] rounded-lg"
        >
          <h1 className="text-2xl font-semibold">
            Complete Web Development using MERN Stack
          </h1>
          <p>Programming Hero</p>
          <p>Issued March 4, 2025</p>

          {/* Certificate Tag with Link */}
          <a
            href="https://drive.google.com/file/d/1d7zLo_w_s35s4xVZ2OUVlByh04VpJPOS/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-4 bg-white text-black text-sm font-medium px-3 py-1 rounded-full shadow hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Certificate
          </a>
        </div>

        <div className="relative space-y-2 p-6 bg-[#fceeda] rounded-lg">
          <h1 className="text-2xl font-semibold">Next Level Web Development</h1>
          <p>Programming Hero</p>
          <p className="absolute bottom-3 right-4 text-black text-sm font-medium px-3 py-1 rounded-full shadow bg-white transition duration-300">
            Running...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
