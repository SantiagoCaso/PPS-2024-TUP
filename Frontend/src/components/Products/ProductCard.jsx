export const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 2xl:grid-cols-5 px-10">
      <article className=" mt-10  flex flex-col gap-5 max-w-xl group cursor-pointer ">
        <div className="cardBgLight grid place-items-center aspect-square  transition-all duration-200 borderDark border-opacity-0 group-hover:drop-shadow group-hover:border-opacity-10 ">
          <img
            className=" w-1/2 drop-shadow-xl transition-transform duration-200  group-hover:scale-105"
            src="../../../public/assets/png/products/small.png"
            alt="image"
          />
        </div>
        <div>
          <h3 className="font-[500]">Lampara de mesa</h3>
          <h4 className="tracking-wide  text-[#6b7280]">$150</h4>
        </div>
      </article>
      <article className=" mt-10  flex flex-col gap-5 max-w-xl group cursor-pointer ">
        <div className="bg-bgLight rounded-lg grid place-items-center aspect-square  transition-all duration-200 borderDark border-opacity-0 group-hover:drop-shadow group-hover:border-opacity-10 ">
          <img
            className=" w-1/2 drop-shadow-xl transition-transform duration-200  group-hover:scale-105 "
            src="../../../public/assets/png/products/medium.png"
            alt="image"
          />
        </div>
        <div>
          <h3 className="font-[500]">Sofá</h3>
          <h4 className="tracking-wide  text-[#6b7280]">$150</h4>
        </div>
      </article>
      <article className=" mt-10  flex flex-col gap-5 max-w-xl group cursor-pointer ">
        <div className="bg-bgLight rounded-lg grid place-items-center aspect-square  transition-all duration-200 borderDark border-opacity-0 group-hover:drop-shadow group-hover:border-opacity-10 ">
          <img
            className=" w-1/2 drop-shadow-xl transition-transform duration-200  group-hover:scale-105 "
            src="../../../public/assets/png/products/big.png"
            alt="image"
          />
        </div>
        <div>
          <h3 className="font-[500]">Guardarropa</h3>
          <h4 className="tracking-wide  text-[#6b7280]">$150</h4>
        </div>
      </article>
    </div>
  );
};
