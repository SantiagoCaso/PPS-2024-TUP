import { NavLink } from "react-router-dom";
import { Cart } from "../../icons/Cart";

export const CartButton = () => {
  return (
    <NavLink to={'/cart'}>
      <Cart />
    </NavLink>
  );
};
