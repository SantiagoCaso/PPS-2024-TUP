import { useEffect, useState } from 'react';
import { GetProductsByName } from '../../services/implementations/product/productService';

export const useSearchProducts = (productName) => {
  const [productByName, setAllProdcutsByName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    GetProductsByName(productName)
      .then((res) => {
        setAllProdcutsByName(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [productName]);

  return { productByName, loading, error };
};
