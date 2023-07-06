import React from "react";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  
  return (
   <>
      {/* img */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2 className="text-shadow">{title}</h2>
        <div className="bars"/>
      </div>
    </>
  );
};

export default CategoryItem;
