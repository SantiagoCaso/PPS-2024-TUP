import Register from "./components/Forms/Register/Register";
import SingIn from "./components/Forms/Sing in/SingIn";
import { NavBar } from "./components/Nav/NavBar";

function App() {
  return (
    <div className="w-full font-geist ">
      <NavBar />
      <SingIn />
      <Register />
    </div>
  );
}

export default App;
