import { useEffect } from "react";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
// import Collaborate from "../../Components/Collaborate/Collaborate";
import MySkill from "../../Components/MySkill/MySkill";
import Project from "../../Components/Project/Project";
import Services from "../../Components/Services/Services";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "../../Components/Contact/Contact";
import Education from "../../Components/Education/Education";


const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
      once: true,
      delay: 100,
      offset: 100,
    });
  }, []);
  return (
    <div className="z-0">
      <Banner />
      <About />
      <MySkill />
      <Project />
      <Services />
      <Education/>
      <Contact/>
      {/* <Collaborate /> */}
    </div>
  );
};

export default Home;
