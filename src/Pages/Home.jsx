import React from "react";
import { categoriesData } from "../constants";
import { CategoryItem } from "../component";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

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
