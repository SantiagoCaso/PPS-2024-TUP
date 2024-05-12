import ReactDOM from "react-dom/client";
import React from "react";
import "./styles/index.css";
import "./styles/nav.css";
import "./styles/products.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./services/router";
import { AuthProvider } from "./context/Auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
