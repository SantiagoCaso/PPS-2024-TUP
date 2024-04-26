import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Nav/NavBar";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="overflow-hidden ">
      <NavBar />
      <div className="customWidth min-h-screen ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
