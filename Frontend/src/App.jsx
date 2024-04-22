import { Register } from "./components/Forms/Register/Register";
import { SingIn } from "./components/Forms/Sing in/SingIn";
import { NavBar } from "./components/Nav/NavBar";
import { NotFound } from "./components/shared/NotFound";
import { NavProvider } from "./context/Nav/NavProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <NavProvider>
          <NavBar />
        </NavProvider>
      ),
      errorElement: <NotFound />,
    },
    {
      path: "/profile",
      element: <div>Componente Profile</div>,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/signin",
      element: <SingIn />,
    },
    {
      //Ruta dinamica, varía según la ID de cada usuario en sesión
      path: "/profile/:profileId",
      element: <div>Componente perfil del usuario actual</div>
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
