/* eslint-disable react/prop-types */
import { ProductsContext } from "./ProductsContext";

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={{}}>{children}</ProductsContext.Provider>
  );
};
