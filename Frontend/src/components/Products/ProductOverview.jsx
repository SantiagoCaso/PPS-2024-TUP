import { GoBackButton } from "./../shared/GoBackButton";
export const ProductOverview = () => {
  return (
    <section className="">
      <GoBackButton />

      <article className="flex flex-col  gap-10 md:flex-row">
        <div className="cardBgLight md:w-1/2">
          <img
            className="drop-shadow-2xl p-5 sm:p-10 "
            src="../../../public/assets/png/products/medium.png"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-3 md:w-1/2">
          <h2 className="font-bold text-4xl text-brown ">Sillon Mediano</h2>
          <span className="text-2xl font-[400] ">$140</span>
          <p className="font-[400] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod atque provident alias! Officiis ex autem quasi vitae quod? Saepe, error laboriosam rerum mollitia eos sequi ad quam ipsum atque ratione.</p>
          <button className="bg-secondaryDark text-brown font-semibold tracking-wide rounded-md py-3 w-fit px-5 hover:bg-primaryDark ">Agregar al carrito</button>
        </div>
      </article>
    </section>
  );
};
