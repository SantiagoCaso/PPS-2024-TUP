import { useForm } from 'react-hook-form';
import { signInScheme } from '../../../services/validator/singInScheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../Input';
import { InputPassword } from '../InputPassword';
import { SignInUser } from '../../../services/user/userService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth/AuthContext';
import { useContext } from 'react';
export const SignInForm = () => {
  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInScheme),
  });
  // Password = "has3vgHdhDfbsSajsd",
  // Email = "usuario1@gmail.com",
  const onSubmit = (userData) => {
    SignInUser(userData.email, userData.password)
      .then((AuthResponse) => {
        saveToken(AuthResponse.data);
        navigate('/');
      })
      .catch((err) => {
        console.log('Error Iniciar sesion ' + err);
      });
  };
  return (
    <form
      className="space-y-6 mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        errors={errors.email}
        name={'email'}
        label={'Correo electronico'}
        placeholder={'pedro@gmail.com'}
        register={register}
      />
      <InputPassword
        errors={errors.password}
        label={'Contraseña'}
        name={'password'}
        placeholder={'******'}
        register={register}
      />

      <button type="submit" className="btn-submit">
        Iniciar Sesión
      </button>
    </form>
  );
};
