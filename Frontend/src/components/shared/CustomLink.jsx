import { NavLink } from "react-router-dom";

export const CustomLink = ({ route, text}) => {
  return (
    <NavLink className="capitalize tracking-wide " to={`${route}`}>

      {text}
       
    </NavLink>
  );
};
