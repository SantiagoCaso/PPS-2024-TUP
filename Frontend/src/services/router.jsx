import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "../components/shared/NotFound";
import { Profile } from "../components/User/Profile";
import { SingIn } from "../components/Forms/Sing in/SingIn";
import { Loader } from "../components/shared/Loader";
import { CategoriesList } from "../components/Products/CategoriesList";
import { ProductList } from "../components/Products/ProductList";
import { CartPage } from "./../pages/CartPage";
import { HomePage } from "./../pages/HomePage";
import { ProductOverview } from "../components/Products/ProductOverview";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },
      {
        path: "/product",
        element: <ProductOverview />,
      },
      {
        path: "/categories",
        element: <CategoriesList />,
      },
      {
        path: "/categories/:categoryId",
        element: <ProductList />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <CartPage />,
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
];

export const router = createBrowserRouter(routes);
