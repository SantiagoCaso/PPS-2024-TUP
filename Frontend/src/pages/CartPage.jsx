import { Subtitle } from '../components/shared/Subtitle';
export const CartPage = () => {
  const test = [1, 2, 3, 4];
  return (
    <section className="flex flex-col justify-center items-center  pt-10 w-full  ">
      <Subtitle text={'Carrito de compras'} />

      {test.map((e, i) => {
        return (
          <article
            key={i}
            className="flex justify-between  w-full  h-[160px] borderDark border-[.5px] border-opacity-15 border-x-0 border-t-0 py-8  "
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
                <h4 className="font-semibold">Product Name</h4>
                <h5>Category</h5>
              </div>

              <div className="addContainer w-full ">
                <span className="changeAdd text-base ">–</span>
                <div className="changeAdd  text-base borderDark border-y-0 border-opacity-5 cursor-default">4</div>
                <span className="changeAdd font-[300] text-lg">+</span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end  w-1/3 ">
              <span className="font-semibold  ">✕</span>
              <span>$30.00</span>
            </div>
          </article>
        );
      })}
    </section>
  );
};
