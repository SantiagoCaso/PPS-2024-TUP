import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Nav/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
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
