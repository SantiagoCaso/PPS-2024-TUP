<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";
import { ProductsProvider } from "./context/Products/ProductsProvider";
=======
import { Outlet } from 'react-router-dom';
import { NavBar } from './components/Nav/NavBar';
import Footer from './components/Footer/Footer';
import { ProductsProvider } from './context/Products/ProductsProvider';
 import FornitureChatBot from './components/shared/Chatbot/FornitureChatbot';
import { Toaster } from 'sonner';
>>>>>>> dc43c88e591e7668f94a71a7cb8d686e74522357

function App() {
  return (
    <ProductsProvider>
      <div className="overflow-hidden bg-light-dark">
        <NavBar />
        <Toaster richColors position="top-center" closeButton  />
        <div className="customWidth min-h-[calc(100vh-64px)] customPadding  ">
          <Outlet />
        </div>
        <Footer />
         <FornitureChatBot /> 
      </div>
    </ProductsProvider>
  );
}

export default App;
