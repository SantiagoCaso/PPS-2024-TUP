import { useContext } from "react";
import { NavContext } from "../../context/Nav/NavContext";
import { CategoryBig } from "../../icons/CategoryBig";
import { CategoryMedium } from "../../icons/CategoryMedium";
import { CategorySmall } from "../../icons/CategorySmall";
import { NavLink } from "react-router-dom";
export const NavListItems = () => {
  const { ProductCategories, setShowMenu } = useContext(NavContext);
  const Icons = [CategorySmall, CategoryMedium, CategoryBig];
  return (
    <ul className=" space-y-16 sm:flex sm:flex-row sm:space-y-0 sm:gap-5 sm:w-1/2 sm:justify-evenly  ">
      {ProductCategories.map((category, i) => {
        const Icon = Icons[i];
        return (
          <li className="" key={category}>
            <NavLink
              to={`/categories/${category}`}
              className="capitalize tracking-wide  flex gap-3  "
              key={category}
              onClick={() => setShowMenu(false)}
            >
              {Icon && <Icon customStyle="w-7 sm:hidden " />}
              <span className="sm:hidden">Muebles {category}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
