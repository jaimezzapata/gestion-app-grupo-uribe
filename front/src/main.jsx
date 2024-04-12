import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ListarUsuarios from "./components/layouts/pages/usuarios/ListarUsuarios";
import Login from "./components/layouts/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/layouts/pages/Home";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",  
    element: <Home />,
  },
  {
    path: "/listar-usuarios",
    element: <ListarUsuarios />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
