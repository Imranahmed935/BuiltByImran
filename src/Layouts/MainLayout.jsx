import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
