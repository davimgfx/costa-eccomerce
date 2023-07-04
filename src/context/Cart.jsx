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


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
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

const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount}

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
