import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "../components/shared/NotFound";
import { Profile } from "../components/User/Profile";
import { SignIn } from "../components/Forms/Sing in/SingIn";
import { CategoriesList } from "../components/Products/CategoriesList";
import { ProductList } from "../components/Products/ProductList";
import { CartPage } from "./../pages/CartPage";
import { HomePage } from "./../pages/HomePage";
import { ProductOverview } from "../components/Products/ProductOverview";
import { Register } from "./../components/Forms/Register/Register";
import AdminProfile from "../components/User/Admin/AdminProfile";

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
        path: "/product/:productId",
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
        path: "/profile/:userId",
        element: <Profile />,
      },
      {
        path: "/profile/admin",
        element: <AdminProfile />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export const router = createBrowserRouter(routes);
