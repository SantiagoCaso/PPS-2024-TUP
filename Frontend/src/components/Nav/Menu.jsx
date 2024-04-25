import { useContext } from "react";
import { NavContext } from "../../context/Nav/NavContext";
import { NavListItems } from "./NavListItems";
import { Search } from "./Search";
import { CustomLink } from "../shared/CustomLink";
import { User } from "../../icons/User";

export const Menu = () => {
  const { showMenu } = useContext(NavContext);

  return (
    <div
      className={`fixed w-full bg-BgDark overflow-hidden p-5 px-7 transition-all duration-500  top-16 flex flex-col gap-16 items-start justify-center h-[calc(100vh - 64px)]  sm:relative sm:flex-row sm:left-0 sm:items-center sm:gap-2 sm:h-16 sm:top-auto sm:p-0 sm:justify-around sm:px-5 ${
        showMenu ? "left-0" : "left-full"
      }`}
    >
      <CustomLink route="/perfil" text="Mi perfil" />
     
      <Search />
      <NavListItems />
    </div>
  );
};
