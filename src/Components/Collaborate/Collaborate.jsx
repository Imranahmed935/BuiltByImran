import { Link } from "react-router-dom";
import developer from "../../assets/skills/developerpic.png";

const Collaborate = () => {
  return (
    <div className="md:flex justify-between items-center gap-4 bg-[#fceeda] px-10 py-4 rounded-lg">
      <div className="space-y-4">
        <h1 className="text-4xl">
          Let’s Collaborate <br /> Together
        </h1>
        <p>Let’s turn your ideas into stunning digital experiences.</p>
        <Link to={"/contact"}>
          <button className="bg-blue-700 rounded px-10 py-2 mt-4 text-white flex items-center gap-2">
            Contact
          </button>
        </Link>
      </div>
      <div>
        <img src={developer} alt="" />
      </div>
    </div>
  );
};

export default Collaborate;
