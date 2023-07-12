import { createContext, useReducer } from "react";
import {createAction} from "../utils/reducer/reducer"
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

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
  const existingCartItems = cartItems.filter(
    (cartItem) => cartItem.id === cartItemToClean.id
  );

  if (existingCartItems) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClean.id);
  }
};

const INITIAL_STATE = {
  cartCount: 0,
  cartItems: [],
  isCartOpen: false,
};

const CART_ACTION_TYPES ={
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemToCart: () => {},
  cartCount: 0,
});

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, isCartOpen }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        },
      )
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemToCart = (cartItemToClean) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClean);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (boolean) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean) );
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemToCart,
    clearItemToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
