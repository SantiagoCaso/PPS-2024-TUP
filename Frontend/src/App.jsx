import EditProfile from "./components/Forms/EditProfile/EditProfile";
import Profile from "./components/Forms/EditProfile/Profile";
import Register from "./components/Forms/Register/Register";
import SingIn from "./components/Forms/Sing in/SingIn";
import { NavBar } from "./components/Nav/NavBar";

function App() {
  return (
    <div className="w-full font-geist ">
      <NavBar />
      <SingIn />
      <Register />
      <EditProfile />
      <Profile />
    </div>
  );
}

export default App;
