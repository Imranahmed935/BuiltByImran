import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Details from "../Pages/Details/Details";
import Blog from "../Pages/Blog/Blog";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails />,
        loader: async ({ params }) => {
          const res = await fetch("/Blog.json");
          const data = await res.json();
          return data.find((blog) => blog.id === Number(params.id));
        },
      },
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
