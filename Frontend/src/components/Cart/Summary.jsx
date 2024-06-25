import { useEffect } from 'react';
import { useSummary } from '../../hooks/cart/useSummary';
import { CartSummaryItem } from './CartSummaryItem';

export const Summary = () => {

  const {SetCartSummary,total, subTotal,costoEnvio} = useSummary()
  useEffect(() => {
    SetCartSummary()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <article className="bg-primaryDark w-full h-full customPadding rounded-lg   text-white  pb-5  ">
      <CartSummaryItem price={subTotal} title={'Sub total'} />
      <CartSummaryItem price={costoEnvio} title={'Costo de envío'} />

      <CartSummaryItem
        price={total}
        customStyle={'font-semibold'}
        title={'Total'}
      />

      <button className="btn-submit bg-bgLight text-BgDark max-w-xl mx-auto mt-10 md:text-base hover:bg-opacity-90">
        Continuar compra
      </button>
    </article>
  );
};
