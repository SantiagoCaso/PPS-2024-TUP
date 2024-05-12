import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInScheme } from "../../../services/validator/singInScheme";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { FormHeader } from "../FormHeader";
import { FormFooter } from "../FormFooter";
import { SignInUser } from "../../../services/user/userService";

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInScheme),
  });
  // Password = "has3vgHdhDfbsSajsd",
  // Email = "usuario1@gmail.com",
  const onSubmit = (data) => {
    SignInUser(data.email, data.password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Error Iniciar sesion " + err);
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <FormHeader title={"Iniciar sesion"} />

      <form
        className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          errors={errors.email}
          name={"email"}
          label={"Correo electronico"}
          placeholder={"pedro@gmail.com"}
          register={register}
        />
        <InputPassword
          errors={errors.password}
          label={"Contraseña"}
          name={"password"}
          placeholder={"******"}
          register={register}
        />

        <button type="submit" className="btn-submit">
          Crear cuenta
        </button>
      </form>

      <FormFooter
        question={"¿No tienes una cuenta?"}
        text={"Registrarse"}
        route={"/register"}
      />
    </div>
  );
};
