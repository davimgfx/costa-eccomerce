
import React, { useContext } from "react";
import { CategoriesContext } from "../../context/Categories";
import ProductCard from "../ProductCard/ProductCard";
import {Link} from "react-router-dom"

const capitalizeFirstLetter = word => word.charAt(0).toUpperCase() + word.slice(1);
const CategoryPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
   
    const orderedCategoriesDataTitles = Object.keys(categoriesMap).sort(function(a, b) {
        if (a === "womens") {
          return -1; 
        }
        if (a === "mens") {
          return -1; 
        }
        if (a === "jackets") {
          return -1; 
        }
        return 0; 
      });

  return (
    <>
      <div className="shop-cards"> 
        {orderedCategoriesDataTitles.map((title, index) => (
          <div key={index}>
            <Link to={`/shop/${title}`}>
              <h2 className="product-card-title">{capitalizeFirstLetter(title)}</h2>
            </Link>
            <div className="product-card">
              
              {categoriesMap[title]
                .filter((_, index) => index < 4)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryPreview;
