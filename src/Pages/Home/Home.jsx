import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import MySkill from "../../Components/MySkill/MySkill";
import Project from "../../Components/Project/Project";

const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <MySkill/>
      <Project/>
    </div>
  );
};

export default Home;
