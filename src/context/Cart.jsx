import React, { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {

  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id)

  if(existingCartItem){
    return cartItems.map((cartItem) => {
      if(cartItem.id === productToAdd.id){
        return {
        ...cartItem,
          quantity: cartItem.quantity + 1
        }
      } else {
        return cartItem
      }
    })
  }

  return [...cartItems, { ...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
  const updatedCartItems = cartItems.map((cartItem) => {
    if (cartItem.id === cartItemToRemove.id) {
      const updatedQuantity = cartItem.quantity - 1;

      return {
        ...cartItem,
        quantity: updatedQuantity >= 1 ? updatedQuantity : 1,
      };
    }

    return cartItem;
  });

  return updatedCartItems.filter((cartItem) => cartItem.quantity > 0);
};

const clearCartItem = (cartItems, cartItemToClean) => {
    const existingCartItems = cartItems.filter((cartItem) => cartItem.id === cartItemToClean.id);

    if(existingCartItems){
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToClean.id)
    }
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemToCart: () => {},
    clearItemToCart: () => {},
    cartCount: 0
});

export const CartProvider = ({ children }) => {
const [isCartOpen, setIsCartOpen ] = useState(false)
const [cartItems, setCartItems] = useState([])
const [cartCount, setCartCount] = useState(0)

useEffect(( ) => {
  const newCartCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  setCartCount(newCartCount)
}, [cartItems])

const addItemToCart = (productToAdd) => {
  setCartItems(addCartItem(cartItems, productToAdd))
}

const removeItemToCart = (cartItemToRemove) => {
  setCartItems(removeCartItem(cartItems, cartItemToRemove))
}

const clearItemToCart = (cartItemToClean) => {
  setCartItems(clearCartItem(cartItems, cartItemToClean))
}

const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, removeItemToCart, clearItemToCart}

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
