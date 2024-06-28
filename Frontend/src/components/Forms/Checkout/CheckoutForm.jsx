import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { checkoutScheme } from '../../../services/validator/checkoutScheme';
import { checkoutFormData } from '../../../services/const/checkoutFormData';
export const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkoutScheme),
  });
  // Password = "has3vgHdhDfbsSajsd",
  // Email = "usuario1@gmail.com",
  const onSubmit = () => {};
  return (
    <form
      className="grid grid-cols-3 grid-rows-6 gap-x-3 gap-y-5 max-w-3xl md:w-1/2 "
      onSubmit={handleSubmit(onSubmit)}
    >
      {checkoutFormData.map((input) => {
        return (
          <div key={input.name} className={`${input.customClass} `}>
            <Input
              errors={errors[input.name]}
              name={input.name}
              label={input.label}
              placeholder={input.placeholder}
              register={register}
            />
          </div>
        );
      })}

      <button type="submit" className="btn-submit col-span-2 col-start-2">
        Realizar pago
      </button>
    </form>
  );
};
