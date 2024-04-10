import Login from "./components/layouts/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/layouts/pages/Home";
import ListarUsuarios from "./components/layouts/pages/usuarios/ListarUsuarios";
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
function App() {
  return (
    <div className="login-container">
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
