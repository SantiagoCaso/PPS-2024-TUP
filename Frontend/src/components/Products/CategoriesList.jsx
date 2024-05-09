import { CategoriesData } from "../../services/category/CategoriesData";
import { CategoryCard } from "./CategoryCard";
import { Subtitle } from "./../shared/Subtitle";



export const CategoriesList = () => {
  return (
    <section className="w-full ">
      

      <Subtitle text={"Categorias"} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 ">
        {CategoriesData.map((category) => {
          return (
            <CategoryCard
              key={category.name}
              src={category.src}
              text={category.name}
              // route={category.route}
              route={'/categories/'+ category.id}
            />
          );
        })}
      </div>
    </section>
  );
};
