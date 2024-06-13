import { useContext } from 'react';
import { Subtitle } from '../components/shared/Subtitle';
import { ProductsContext } from '../context/Products/ProductsContext';
import { useAddItemQuantity } from '../hooks/cart/useAddItemQuantity';
import { useDecreaseItemQuantity } from '../hooks/cart/useDecreaseItemQuantity';
import { useDeleleteItem } from '../hooks/cart/useDeleleteItem';
import { CartSummaryItem } from '../components/Cart/CartSummaryItem';

export const CartPage = () => {
  const { cartItems, categories } = useContext(ProductsContext);
  const { AddItemQuantity } = useAddItemQuantity();
  const { DecreaseItemQuantity } = useDecreaseItemQuantity();
  const { DeleteItem } = useDeleleteItem();

  // if (!cartItems.length) {
  //   return <div>Carrito Vacio</div>;
  // }
  return (
    <section className="flex flex-col justify-center items-center gap-10 pt-10 w-full  max-w-4xl mx-auto ">
      <Subtitle text={'Carrito de compras'} />

      {cartItems.map((item, i) => {
        return (
          <article
            key={i}
            className="flex justify-between  w-full  h-[160px] borderDark border-[.5px] border-opacity-15 border-x-0 border-t-0  py-8 "
          >
            {/* <div className="cardBgLight max-w-[180px] p-4 h-[120px] aspect-square  w-1/3">
            <img  src="assets/png/products/small.png" alt="" />
          </div> */}

            <div className="w-auto">
              <img
                className="bg-bgSemiLight rounded-md  aspect-square h-full   "
                src="assets/png/products/small.png"
                alt=""
              />
            </div>

            <div className="flex flex-col justify-between items-start   w-1/3 ">
              <div className="">
                <h4 className="font-semibold">{item.name}</h4>
                <h5 className="capitalize">
                  {categories[item.categoryId - 1].name}
                </h5>
              </div>

              <div className="addContainer w-full ">
                <span
                  onClick={() => DecreaseItemQuantity(item)}
                  className="changeAdd text-base "
                >
                  –
                </span>
                <div className="changeAdd  text-base borderDark border-y-0 border-opacity-5 cursor-default">
                  {item.quantity}
                </div>
                <span
                  onClick={() => AddItemQuantity(item)}
                  className="changeAdd font-[300] text-lg"
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end  w-1/3   ">
              <span
                onClick={() => DeleteItem(item)}
                className="font-semibold cursor-pointer  px-1 "
              >
                ✕
              </span>
              <span>$ {item.price}</span>
            </div>
          </article>
        );
      })}

      <article className="bg-primaryDark w-full h-full customPadding rounded-lg   text-white   ">
        <CartSummaryItem price={'300'} title={'Sub total'} />
        <CartSummaryItem price={'20'} title={'Costo de envío'} />

        <CartSummaryItem
          price={'320'}
          customStyle={'font-semibold'}
          title={'Total'}
        />
      </article>
    </section>
  );
};
