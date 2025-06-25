import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Details/Details";



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
      {
        path: "/details/:id",
        element: <Details />,
        loader: async ({ params }) => {
          const res = await fetch("/Project.json");
          const data = await res.json();
          console.log(data)
          return data.find((project) => project.id === Number(params.id));
        },
      },
    ],
    },
    
])

export default router;