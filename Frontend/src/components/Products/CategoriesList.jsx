import { CategoryCard } from './CategoryCard';
import { Subtitle } from './../shared/Subtitle';
import { useEffect, useState } from 'react';
import { GetCategories } from '../../services/implementations/category/categoryService';

import { SkeletonCard } from '../shared/SkeletonCard';
export const CategoriesList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    GetCategories().then((catResponse) => {
      console.log(catResponse.data);
      setCategories(catResponse.data);
    });
  }, []);

  if (!categories) {
    return <SkeletonCard />;
  }
  return (
    <section className="w-full ">
      <Subtitle text={'Categorias'} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              imageId={category.imageId}
              categoryName={category.categoryName}
              route={'/categories/' + category.id}
            />
          );
        })}
      </div>
    </section>
  );
};
