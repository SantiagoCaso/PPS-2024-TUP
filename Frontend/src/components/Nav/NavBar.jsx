import { ToggleButton } from "../../context/Nav/ToggleButton";
import { Cart } from "../icons/Cart";
import { Logo } from "../icons/Logo";
import Menu from "./Menu";


export const NavBar = () => {
  return (
    <nav className="bg-BgDark text-light  px-5 relative">
      <div className="flex h-16  justify-between items-center leading-[64px] ">
        <Logo  customStyle='w-10  '/>
        <div className="w-full flex gap-5 items-center justify-end">
          <Menu />
          <Cart />
          <ToggleButton />
        </div>
      </div>
    </nav>
  );
};
