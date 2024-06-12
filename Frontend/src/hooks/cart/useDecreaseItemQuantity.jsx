import { useContext } from 'react';
import { ProductsContext } from '../../context/Products/ProductsContext';
import { useDeleleteItem } from './useDeleleteItem';

export const useDecreaseItemQuantity = () => {
  const { DeleteItem } = useDeleleteItem();
  const { ProductExistInCart, cartItems } = useContext(ProductsContext);
  let prevCartItems = [...cartItems];

  function DecreaseItemQuantity(product) {
    let existingItem = ProductExistInCart(product.id);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        prevCartItems = prevCartItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        DeleteItem(existingItem);
      }
    }
  }

  return { DecreaseItemQuantity };
};
