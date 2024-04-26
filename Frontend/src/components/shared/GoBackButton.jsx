import { useNavigate } from "react-router-dom";
import { LeftArrow } from "../../icons/LeftArrow";

export const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(-1)} className=" cursor-pointer flex underline underline-offset-4 decoration-[0.8px] mb-10 ">
      {" "}
      <LeftArrow /> Volver{" "}
    </div>
  );
};
