import { useContext } from "react";
import { Bars } from "../../components/Nav/Bars";
import { NavContext } from "./NavContext";

export const ToggleButton = () => {
  const { setShowMenu } = useContext(NavContext);
  return (
    <div onClick={ ()=> setShowMenu(showMenu => !showMenu)} className="cursor-pointer z-10 desktopSmall:hidden" >
      <Bars />
    </div>
  );
};
