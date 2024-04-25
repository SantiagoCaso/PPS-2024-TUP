import ReactDOM from "react-dom/client";
import React from "react";
import "./styles/index.css";
import "./styles/nav.css";
import "./styles/products.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./components/shared/NotFound";
import { SingIn } from "./components/Forms/Sing in/SingIn";
import Product from "./components/Products/Product";
import { Loader } from "./components/shared/Loader";
import { ProductsCategory } from "./components/Products/ProductsCategory.jsx";
import App from "./App.jsx";
import { Profile } from "./components/User/Profile";
//Ver todos los templates de tailwind, da igual si son pagos
//Filtar googles images por color transparente para los pngs
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/categories",
        element: <Product />,
      },
      {
        path: "/categories/:categoryId",
        element: <ProductsCategory />,
      },
      {
        path: "/perfil",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SingIn />,
  },

  {
    path: "/register",
    element: <Profile />,
  },

  {
    path: "/products/:productId",
    element: <Loader />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
