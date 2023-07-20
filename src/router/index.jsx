import {
  createBrowserRouter
} from "react-router-dom";
import BookDetail from "../pages/BookDetail";
import BookForm from "../pages/BookForm";
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
          path : "/books/:id",
          element : <BookDetail/>
        },
        {
          path : "/create",
          element : <BookForm/>
        },
        {
          path : "/edit/:id",
          element : <BookForm/>
        },
        {
          path : "/search",
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