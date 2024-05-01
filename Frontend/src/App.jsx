import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Nav/NavBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { GetAllProducts } from "./services/productServices";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    GetAllProducts().then((res) => {
      console.log(res.data);
    });

     

  }, [pathname]);

  return (
    <div className="overflow-hidden ">
      <NavBar />
      <div className="customWidth min-h-screen customPadding">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
