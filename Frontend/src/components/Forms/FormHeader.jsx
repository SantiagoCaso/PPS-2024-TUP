import { Logo } from "../../icons/Logo";
export const FormHeader = ({title}) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="grid place-content-center">
        <Logo customStyle={"w-12"} />
      </div>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {title}
      </h2>
    </div>
  );
};
