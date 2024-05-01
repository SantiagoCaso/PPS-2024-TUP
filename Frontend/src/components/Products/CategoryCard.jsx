import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ text, src, route }) => {
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(route)}
      className=" min-w-full cardBgLight  flex flex-col items-center w-full py-5   borderDark border-opacity-15 sm:border-opacity-5 hover:border-opacity-20 hover:drop-shadow  cursor-pointer  "
    >
      <img
        className="max-w-[280px] sm:p-10"
        src={src}
        alt={`Categoria ${text}`}
      />
      <span className="text-center text-brown font-[500] w-full ">{text} </span>
    </article>
  );
};
