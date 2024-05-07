export const ProductCard = ({ title, price, stock }) => {
  return (
    <div>
      <article className=" mt-10  flex flex-col gap-5 max-w-xl group cursor-pointer ">
        <div className="cardBgLight grid place-items-center aspect-square  transition-all duration-200 borderDark border-opacity-0 group-hover:drop-shadow group-hover:border-opacity-10 ">
          <img
            className=" w-1/2 drop-shadow-xl transition-transform duration-200  group-hover:scale-105"
            src="../../../public/assets/png/products/small.png"
            alt="image"
          />
        </div>

        <div className="w-full flex justify-between">
          <h3 className="font-[500]">{title}</h3>
          <h4 className="tracking-wide  text-[#6b7280]">${price}</h4>
        </div>
        <h5 className="tracking-wide  text-[#6b7280]">
          {stock ? (
            <p className="text-green-400">Disponible</p>
          ) : (
            <p className="text-red-800">No disponible</p>
          )}
        </h5>
      </article>
      {/* <article className=" mt-10  flex flex-col gap-5 max-w-xl group cursor-pointer ">
        <div className="bg-bgLight rounded-lg grid place-items-center aspect-square  transition-all duration-200 borderDark border-opacity-0 group-hover:drop-shadow group-hover:border-opacity-10 ">
          <img
            className=" w-1/2 drop-shadow-xl transition-transform duration-200  group-hover:scale-105 "
            src="../../../public/assets/png/products/medium.png"
            alt="image"
          />
        </div>
        <div className="w-full flex justify-between">
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
        <div className="w-full flex justify-between">
          <h3 className="font-[500]">Guardarropa</h3>
          <h4 className="tracking-wide  text-[#6b7280]">$150</h4>
        </div>
      </article> */}
    </div>
  );
};
