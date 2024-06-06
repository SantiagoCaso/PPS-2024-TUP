import { GoBackButton } from './../shared/GoBackButton';
import { Loader } from '../shared/Loader';
import { useParams } from 'react-router-dom';
import { useProductById } from '../../hooks/products/useProductById';
import { Error } from '../shared/Error';

export const ProductOverview = () => {
  const { productId } = useParams();
  const { product, loading, error } = useProductById(productId);
  if (loading) return <Loader />;
  if (error) return <Error />;

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
          <h2 className="font-bold text-4xl text-brown ">
            {product.productName}
          </h2>
          <span className="text-2xl font-[400] ">${product.price}</span>
          <p className="font-[400] ">{product.productDescription}</p>
          <button className="bg-secondaryDark text-brown font-semibold tracking-wide rounded-md py-3 w-fit px-5 hover:bg-primaryDark ">
            Agregar al carrito
          </button>
        </div>
      </article>
    </section>
  );
};
