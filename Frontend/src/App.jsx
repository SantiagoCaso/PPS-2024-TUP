import { NavBar } from "./components/Nav/NavBar";
import { NavProvider } from "./context/Nav/NavProvider";
import Profile from "./components/User/Profile";

function App() {
  return (
    <div className="w-full font-montserrat ">
      <NavProvider>
        <NavBar />
        <Profile />
      </NavProvider>
    </div>
  );
}

export default App;
