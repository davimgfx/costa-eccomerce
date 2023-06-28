import React from "react";
import { categoriesData } from "../constants";
import { CategoryItem } from "../component";
const Home = () => {
  return (
    <div className="categories-container">
      {categoriesData.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Home;
