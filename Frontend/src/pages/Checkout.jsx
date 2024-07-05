import { CheckoutForm } from '../components/Forms/Checkout/CheckoutForm';
import { Subtitle } from '../components/shared/Subtitle';

export const Checkout = () => {
  return (
    <div className='py-12 flex items-center justify-center flex-col'>
      <Subtitle text={'Checkout'}/>
      <CheckoutForm />
    </div>
  );
};
