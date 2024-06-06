/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ProductsContext } from './ProductsContext';

export const ProductsProvider = ({ children }) => {
  const [categories] = useState([
    { name: 'pequeños', route: 'small', imageId: 'small.png' },
    { name: 'medianos', route: 'medium', imageId: 'medium.png' },
    { name: 'grandes', route: 'large', imageId: 'large.png' },
  ]);

  return (
    <ProductsContext.Provider value={{categories}}>{children}</ProductsContext.Provider>
  );
};
