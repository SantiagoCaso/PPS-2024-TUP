import { useContext } from "react";
import { NavContext } from "../../context/Nav/NavContext";
import { CategoryBig } from "../icons/CategoryBig";
import { CategoryMedium } from "../icons/CategoryMedium";
import { CategorySmall } from "../icons/CategorySmall";
export const NavListItems = () => {
  const { ProductCategories } = useContext(NavContext);
  const Icons = [CategorySmall, CategoryMedium, CategoryBig];
  return (
    <ul className=" space-y-16 desktopSmall:flex desktopSmall:flex-row desktopSmall:space-y-0 desktopSmall:gap-5 desktopSmall:w-1/2 desktopSmall:justify-evenly  ">
      {ProductCategories.map((category, i) => {
        const Icon = Icons[i];
        return (
          <li className="flex gap-3   " key={category}>
            {Icon && <Icon customStyle='w-5 desktopSmall:hidden ' />}
            <a className="  uppercase desktopSmall:capitalize tracking-wide  py-2 px-3 rounded-lg desktopSmall:p-0 " href="#">
              {category}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
