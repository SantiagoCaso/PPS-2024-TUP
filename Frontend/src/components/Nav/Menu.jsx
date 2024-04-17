import { useContext } from "react";
import { NavContext } from "../../context/Nav/NavContext";
import { NavListItems } from "./NavListItems";
import { Search } from "./Search";

const Menu = () => {
  const { showMenu } = useContext(NavContext);

  return (
    <div
      className={`absolute w-full bg-BgDark  overflow-hidden p-5 px-7 transition-all duration-300 left-full top-16 flex flex-col gap-16  items-start justify-center h-[calc(100vh-64px)  desktopSmall:left-0  desktopSmall:relative desktopSmall:flex-row desktopSmall:items-center desktopSmall:gap-2 desktopSmall:h-16 desktopSmall:top-auto  desktopSmall:p-0 desktopSmall:justify-around desktopSmall:px-5 ${
        showMenu && "-translate-x-full desktopSmall:translate-x-0"
      }`}
    >
      <Search />
      <NavListItems />
    </div>
  );
};
export default Menu;
