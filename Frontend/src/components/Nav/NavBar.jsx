import { Cart } from "../icons/Cart";
import Logo from "../icons/Logo";
import { OpenMenu } from "../icons/OpenMenu";

export const NavBar = () => {
  return (
    <div className="bg-red-200 h-16 flex justify-between items-center px-5  relative">
      <Logo />
      <div className="w-full flex gap-5 items-center justify-end">
        <Cart />
        <OpenMenu />
      </div>
    </div>
  );
};
