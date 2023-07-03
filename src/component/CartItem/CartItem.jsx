import React from "react";

const CartItem = ({ cartItem }) => {
  // const { name, quantity } = cartItem
  console.log(cartItem);
  return (
    <div>
      <img src={cartItem.imageUrl} alt="" />
      <h2>{cartItem.name}</h2>
      <p>{cartItem.price}</p>
    </div>
  );
};

export default CartItem;
