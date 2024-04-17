/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavContext } from "./NavContext";

export const NavProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const ProductCategories = [
    "Pequeños",
    "Medianos",
    "grandes",
  ];

  return (
    <NavContext.Provider
      value={{
        showMenu,
        setShowMenu,
        ProductCategories
      }}
    >
      {children}
    </NavContext.Provider>
  );
};
