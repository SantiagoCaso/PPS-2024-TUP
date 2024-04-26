import ReactDOM from "react-dom/client";
import React from "react";
import "./styles/index.css";
import "./styles/nav.css";
import "./styles/products.css";
//Ver todos los templates de tailwind, da igual si son pagos
//Filtar googles images por color transparente para los pngs
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
