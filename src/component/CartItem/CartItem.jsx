import React from "react";

const CartItem = ({ cartItem }) => {
  // const { name, quantity } = cartItem
  return (
    <div className="dropdown-div-cartItem">
      <div className="dropdown-div-cartItem-div-image">
        <img
          src={cartItem.imageUrl}
          alt="image_product"
          className="dropdown-div-cartItem-image"
        />
      </div>
      <div className="dropdown-div-cartItem-text">
        <h2>{cartItem.name}</h2>
        <p>
         {cartItem.quantity} x ${cartItem.price}
        </p>
        <h3>Total</h3>
        <p>
          ${cartItem.price * cartItem.quantity}
        </p>
      </div>
      <div className="dropdown-div-cartItem-close">
        <i className="fa-solid fa-x dropdown-div-cartItem-text-close-items"></i>
      </div>
    </div>
  );
};

export default CartItem;
