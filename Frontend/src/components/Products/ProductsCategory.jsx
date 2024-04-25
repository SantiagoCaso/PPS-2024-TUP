import { useParams } from "react-router-dom";

export const ProductsCategory = () => {
  const { categoryId } = useParams();
  return <div>ProductsCategory {categoryId}</div>;
};
