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
          className="category-container">
          <CategoryItem category={category} key={category.id} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
