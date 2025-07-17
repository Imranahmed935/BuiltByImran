import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

import MainLayout from "../Layouts/MainLayout";
import Details from "../Pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      
      // {
      //   path: "/blogDetails/:id",
      //   element: <BlogDetails />,
      //   loader: async ({ params }) => {
      //     const res = await fetch("/Blog.json");
      //     const data = await res.json();
      //     return data.find((blog) => blog.id === Number(params.id));
      //   },
      // },
      {
        path: "/details/:id",
        element: <Details />,
        loader: async ({ params }) => {
          const res = await fetch("/Project.json");
          const data = await res.json();
          console.log(data);
          return data.find((project) => project.id === Number(params.id));
        },
      },
    ],
  },
]);

export default router;
