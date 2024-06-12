import { useContext } from 'react';
import { ProductsContext } from '../../context/Products/ProductsContext';

export const useDeleleteItem = () => {
  const { cartItems, setCartItems } = useContext(ProductsContext);

  function DeleteItem(productToDelete) {
    let currentCartItems = [...cartItems];

    currentCartItems.splice(currentCartItems.indexOf(productToDelete, 1));
    setCartItems(currentCartItems);
  }
  return { DeleteItem };
};
