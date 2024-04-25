import { Outlet } from "react-router-dom";
import { NavBar } from "./components/Nav/NavBar";

function App() {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
