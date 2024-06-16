import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { NotFound } from '../components/shared/NotFound';
import { Profile } from '../components/User/Profile';
import { SignIn } from '../components/Forms/SingIn/SingIn';
import { CategoriesList } from '../components/Products/CategoriesList';
import { ProductList } from '../components/Products/ProductList';
import { CartPage } from './../pages/CartPage';
import { HomePage } from './../pages/HomePage';
import { ProductOverview } from '../components/Products/ProductOverview';
import { Register } from './../components/Forms/Register/Register';
import { ProtectedRoute } from '../components/shared/ProtectedRoute';

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
        path: "/",
        element: <ProtectedRoute route="/signin" />,
        children: [
          {
<<<<<<< HEAD
            path: "/profile/:userId",
=======
            path: '/profile',
>>>>>>> d9406e528556f4e1204b1f653e28337f198cc0dd
            element: <Profile />,
          },
        ],
      },
      {
<<<<<<< HEAD
        path: "/profile/admin",
        element: <AdminProfile />,
      },
      {
        path: "/cart",
=======
        path: '/cart',
>>>>>>> afd070a03a2259da0429da3d1ce063d2cf201472
        element: <CartPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
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
