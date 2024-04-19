import { NavBar } from "./components/Nav/NavBar";
import { NavProvider } from "./context/Nav/NavProvider";

function App() {
  return (
    <div className="w-full font-montserrat ">
      <NavProvider>
        <NavBar />
      </NavProvider>
    </div>
  );
}

export default App;
