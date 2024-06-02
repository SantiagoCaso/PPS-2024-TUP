/* eslint-disable react-hooks/exhaustive-deps */
import { ProductCard } from './ProductCard';
import { GoBackButton } from './../shared/GoBackButton';
import { useParams } from 'react-router-dom';
import { Loader } from '../shared/Loader';
import { useProducts } from '../../hooks/useProducts';
import { Error } from '../shared/Error';
export const ProductList = () => {
  const { categoryId } = useParams();
  const { allProducts, loading, error } = useProducts(categoryId);

  if (loading) return <Loader />;
  if (error) return <Error/>;

  return (
    <section className="">
      <GoBackButton />
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 ">
        {allProducts?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
            stock={product.available}
            productId={product.id}
          />
        ))}
      </div>
    </section>
  );
};
