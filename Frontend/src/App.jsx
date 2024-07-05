import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import { ProductsProvider } from "./context/Products/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <div className="overflow-hidden ">
        <NavBar />
        <div className="customWidth min-h-[calc(100vh-64px)] customPadding ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ProductsProvider>
  );
}

export default App;
