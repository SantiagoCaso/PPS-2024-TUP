import { ProductCard } from "./ProductCard";
import { GoBackButton } from './../shared/GoBackButton';

export const ProductList = () => {
  return (
    <section className="">
      <GoBackButton />
      <ProductCard />
    </section>
  );
};
