
import { useContext } from 'react';
import { CartContext } from "../../context/Cart";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)


  return (
    <div className="cart-container" onClick={toggleIsCartOpen}>
      <i className="fa-solid fa-cart-shopping"></i>
      { cartCount > 0 && (
        <span className='cart-container-items'>
          {cartCount >= 99 ? '99+' : cartCount}
        </span>
      )}
    </div>
  );
}

export default CartIcon;