import { ProductCard } from "./ProductCard";
import { GoBackButton } from "./../shared/GoBackButton";
import { useEffect, useState } from "react";
import { GetAllProducts } from "../../services/product/productService";
export const ProductList = () => {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    GetAllProducts().then((res) => {
      setAllProducts(res.data);
    });
  }, []);

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
