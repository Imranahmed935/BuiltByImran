import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import MySkill from "../../Components/MySkill/MySkill";
import Project from "../../Components/Project/Project";
import Services from "../../Components/Services/Services";


const Home = () => {
  return (
    <div>
      <Banner />
      <About/>
      <Services/>
      <MySkill/>
      <Project/>
    </div>
  );
};

export default Home;
