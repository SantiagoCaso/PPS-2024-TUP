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
      <nav className="bg-BgDark text-light  px-4 lg:px-7 xl:mb-10 ">
        <div className="flex h-16  justify-between items-center leading-[64px]  ">
          <NavLink to="/">
            <Logo customStyle="w-10 " />
          </NavLink>
          <div className="w-full flex gap-5 items-center justify-end relative xl:gap-7 ">
            <Menu />
            <Cart />
            <User customStyle="hidden sm:bock" />
            <ToggleButton />
          </div>
        </div>
      </nav>
    </NavProvider>
  );
};
