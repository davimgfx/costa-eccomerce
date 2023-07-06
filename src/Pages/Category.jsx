import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../component";
import { CategoriesContext } from "../context/Categories";
const Category = () => {
  const { id } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[id]);

  useEffect(() => {
    setProducts(categoriesMap[id]);
  }, [id, categoriesMap]);

  return (
    <>
      <div className="shop-cards">
      <h2 className="product-card-title">{id.charAt(0).toUpperCase() + id.slice(1)}</h2>
        <div className="product-card">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
