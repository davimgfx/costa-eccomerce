import React, { useContext } from "react";
import { ProductCard } from "../component";
import { ProductsContext } from "../context/Products";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="product-card product-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </div>
  );
};

export default Shop;
