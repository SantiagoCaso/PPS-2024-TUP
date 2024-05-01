import { ProductCard } from "./ProductCard";
import { GoBackButton } from "./../shared/GoBackButton";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetAllProducts } from "../../services/productServices";
export const ProductList = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);

    GetAllProducts().then((res) => {
      setData(res.data);
    });
  }, [pathname]);

  return (
    <section className="">
      <GoBackButton />
      <div>
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.name}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};
