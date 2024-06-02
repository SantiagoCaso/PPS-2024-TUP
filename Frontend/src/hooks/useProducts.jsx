import { useEffect } from 'react';
import { useState } from 'react';
import { categoriesDictionary } from '../services/constants/categories';
import { GetAllProducts } from '../services/implementations/product/productService';

export const useProducts = (categoryId) => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let categorieIndex = categoriesDictionary.findIndex(
      (cat) => cat.name === categoryId
    );
    GetAllProducts()
      .then((res) => {
        const orderedProducts = res.data
          .sort((a, b) => Number(b.available) - Number(a.available))
          .filter(
            (product) =>
              product.categoryId === categoriesDictionary[categorieIndex].id
          );
        setAllProducts(orderedProducts);
      })
      .catch((err) => setError(err))
      .finally(setLoading(false));
  }, [categoryId]);

  return { allProducts, loading, error };
};
