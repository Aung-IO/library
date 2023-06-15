import {
  createBrowserRouter
} from "react-router-dom";
import Create from "../pages/Create";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";
import Layout from "../pages/layout/layout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children : [
        {
          path : "",
          element : <Home/>
        },
        {
          path : "/Create",
          element : <Create/>
        },
        {
          path : "/Search",
          element : <Search/>
        },
       {
        path : "*",
        element : <NotFound/>
       }

      ]
    },
  ]);

  export default router