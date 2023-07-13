import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryItem } from "../component";
import { categoriesData } from "../constants/categoryItem";
import { CartContext } from "../context/Cart";
import { CategoriesContext } from "../context/Categories";

const Home = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const { addItemToCart } = useContext(CartContext);
  const orderedCategoriesDataTitles = Object.values(categoriesMap).sort(
    function (a, b) {
      if (a === "womens") {
        return -1;
      }
      if (a === "mens") {
        return -1;
      }
      if (a === "jackets") {
        return -1;
      }
      if (a === "hats") {
        return -1;
      }
      return b;
    }
  );

  return (
    <>
      <div className="categories-container">
        {categoriesData.map((category) => (
          <Link
            to={`/shop/${category.title.toLowerCase()}`}
            className="category-container"
            key={category.id}>
            <CategoryItem category={category} />
          </Link>
        ))}
      </div>
      <div className="category-products-pround">
        <h2 className="category-products-pround-title">
          Products we are proud of
        </h2>
        <div className="category-products-pround-items">
          {orderedCategoriesDataTitles
            .filter((_, index) => index < 2)
            .map((items) =>
              items
                .filter((_, index) => index < 3)
                .map((item) => (
                  <div className="product-card-container">
                    <div className="product-card-img-container">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="product-card-img"
                      />
                    </div>
                    <div className="product-card-text-container">
                      <h2 className="product-card-text-h2">{item.name}</h2>
                      <p className="product-card-text-p">$ {item.price}</p>
                    </div>
                    <div className="product-card-buttons-container">
                      <button
                        className="product-card-button btn"
                        onClick={() => addItemToCart(item)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
            )}
        </div>
      </div>
      <div className="category-products-trending">
        <h2 className="category-products-trending-title">Trending Now</h2>

        <div className="category-products-trending-items">
          {orderedCategoriesDataTitles
            .filter((_, index) => index > 1)
            .map((items) =>
              items
                .filter((_, index) => index < 4)
                .map((item) => (
                  <div className="product-card-container">
                    <div className="product-card-img-container">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="product-card-img"
                      />
                    </div>
                    <div className="product-card-text-container">
                      <h2 className="product-card-text-h2">{item.name}</h2>
                      <p className="product-card-text-p">$ {item.price}</p>
                    </div>
                    <div className="product-card-buttons-container">
                      <button
                        className="product-card-button btn"
                        onClick={() => addItemToCart(item)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
            )}
        </div>
      </div>
    </>
  );
};

export default Home;
