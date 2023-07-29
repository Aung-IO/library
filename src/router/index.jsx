import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import BookDetail from "../pages/BookDetail";
import BookForm from "../pages/BookForm";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Search from "../pages/Search";
import Layout from "../pages/layout/layout";

import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function index() {
  
  let { authReady, user } = useContext(AuthContext);

  let isAuthenticated = Boolean(user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: isAuthenticated ? <Home /> : <Navigate to="/login"/>,
        },
        {
          path: "/books/:id",
          element: isAuthenticated ? <BookDetail /> : <Navigate to="/login"/>,
        },
        {
          path: "/create",
          element: isAuthenticated ? <BookForm /> : <Navigate to="/login"/>,
        },
        {
          path: "/edit/:id",
          element: isAuthenticated ? <BookForm /> : <Navigate to="/login"/>,
        },
        {
          path: "/search",
          element: isAuthenticated ? <Search /> : <Navigate to="/login"/>,
        },
        {
          path: "/register",
          element: !isAuthenticated ? <Register /> : <Navigate to="/"/>,
        },
        {
          path: "/login",
          element:!isAuthenticated ?  <Login /> : <Navigate to="/"/>,
        },

        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return( authReady && <RouterProvider router={router} />);
}
