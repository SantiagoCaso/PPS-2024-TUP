import { Subtitle } from '../components/shared/Subtitle';

import { Summary } from '../components/Cart/Summary';
import { CartProductList } from '../components/Cart/CartProductList';

export const CartPage = () => {
  // if (!cartItems.length) {
  //   return <div>Carrito Vacio</div>;
  // }
  return (
    <section className="flex flex-col justify-center items-center gap-10 pt-10 w-full  max-w-4xl mx-auto ">
      <Subtitle text={'Carrito de compras'} />
      <CartProductList />
      <Summary />
    </section>
  );
};
