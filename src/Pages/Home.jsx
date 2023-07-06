import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryItem } from "../component";
import { categoriesData } from "../constants/categoryItem";
import { UserContext } from "../context/UserProvider";

const Home = () => {
  return (
    <div className="categories-container">
      {categoriesData.map((category) => (
        <Link
          to={`/shop/${category.title.toLowerCase()}`}
          className="category-container" key={category.id}>
          <CategoryItem category={category}/>
        </Link>
      ))}
    </div>
  );
};

export default Home;
