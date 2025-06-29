import { FaQuestionCircle } from "react-icons/fa";
import { FaMobileScreen, FaPersonBreastfeeding } from "react-icons/fa6";
import { MdDeveloperBoard } from "react-icons/md";

const Services = () => {
  return (
    <div className="md:mt-24 mt-10">
      <div className="space-y-4">
        <h1 className="text-left md:text-4xl text-xl font-semibold">
          Services <br /> made <span className="text-blue-600">Effortless</span>
        </h1>
        <p>
          We make it easy—one complete service with all you need, no extra fees.
        </p>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 py-16 gap-4">
        <div
          data-aos="fade-right"
          className="space-y-2 p-6 bg-[#6cd0dbb9] rounded-lg"
        >
          <MdDeveloperBoard className="text-2xl text-blue-800" />
          <h1 className="text-2xl font-semibold">Web Development</h1>
          <p>
            Comprehensive end-to-end design process, from initial ideation and
            wireframing to interactive prototyping and in-depth usability
            testing.
          </p>
        </div>
        <div className="space-y-2 p-6 bg-[#fceeda] rounded-lg">
          <FaQuestionCircle className="text-2xl text-blue-800" />
          <h1 className="text-2xl font-semibold">Web Consultant</h1>
          <p>
            Provide expert design consultancy for any digital product
            professional, ensuring seamless user experiences and impactful.{" "}
          </p>
        </div>
        <div className="space-y-2 p-6 bg-[#fceeda] rounded-lg">
          <FaMobileScreen className="text-2xl text-blue-800" />
          <h1 className="text-2xl font-semibold">UI/UX Design</h1>
          <p>
            Crafting user-centered, visually stunning, and highly intuitive
            interfaces that deeply engage and resonate with audiences.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="space-y-2 p-6 bg-[#6cd0dbb9] rounded-lg"
        >
          <FaPersonBreastfeeding className="text-2xl text-blue-600" />
          <h1 className="text-2xl font-semibold">Brand Design </h1>
          <p>
            Creates visual identities and develops brand strategies for tech
            companies around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
