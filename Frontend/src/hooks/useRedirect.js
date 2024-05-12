import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
  const navigate = useNavigate();
  const redirecTo = (route) => {
    navigate(route);
  };

  return redirecTo;
};
