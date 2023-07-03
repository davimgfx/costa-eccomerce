import React, { useContext } from "react";
import { CategoryItem } from "../component";
import { categoriesData } from "../constants/categoryItem";
import { UserContext } from "../context/UserProvider";

const Home = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <div className="categories-container">
      {categoriesData.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Home;
