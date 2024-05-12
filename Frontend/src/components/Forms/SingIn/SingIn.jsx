/* eslint-disable react-hooks/exhaustive-deps */
import { FormHeader } from "../FormHeader";
import { FormFooter } from "../FormFooter";
import { SignInForm } from "./SignInForm";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <FormHeader title={"Iniciar sesion"} />

      <SignInForm />

      <FormFooter
        question={"¿No tienes una cuenta?"}
        text={"Registrarse"}
        route={"/register"}
      />
    </div>
  );
};
