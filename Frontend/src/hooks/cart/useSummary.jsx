export const useSummary = () => {
  function GetCartTotal(cartItems) {
    const total = cartItems.reduce((acc, item) => {
      acc += item.price;
    },0);

    return total;
  }

  return { GetCartTotal };
};
