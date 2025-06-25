import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";


const router =  createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    //   {
    //     path: "/details/:id",
    //     element: <Details />,
    //     loader: async ({ params }) => {
    //       const res = await fetch("/project.json");
    //       const data = await res.json();
    //       return data.find((project) => project.id === Number(params.id));
    //     },
    //   },
    ],
    },
    
])

export default router;