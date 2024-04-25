import { ToggleButton } from "./ToggleButton";
import { Cart } from "../../icons/Cart";
import { Logo } from "../../icons/Logo";
import { Menu } from "./Menu";
import { NavProvider } from "./../../context/Nav/NavProvider";
import { NavLink } from "react-router-dom";
import { User } from "./../../icons/User";

export const NavBar = () => {
  return (
    <NavProvider>
      <nav className="bg-BgDark text-light overflow-hidden px-4">
        <div className="flex h-16  justify-between items-center leading-[64px]  overflow-hidden ">
          <NavLink to="/">
            <Logo customStyle="w-10  " />
          </NavLink>
          <div className="w-full flex gap-5 items-center justify-end  overflow-hidden relative xl:gap-7">
            <Menu />
            <Cart />
            <User />
            <ToggleButton />
          </div>
        </div>
      </nav>
    </NavProvider>
  );
};
