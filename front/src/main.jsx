import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListarUsuarios from "./components/layouts/pages/usuarios/ListarUsuarios";
import Login from "./components/layouts/auth/Login";
import Home from "./components/layouts/pages/Home";
import Registro from "./components/layouts/auth/Registro";
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
  {
    path: "/registrar-usuario",
    element: <Registro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
