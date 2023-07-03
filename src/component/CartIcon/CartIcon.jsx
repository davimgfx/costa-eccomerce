
import { useContext } from 'react';
import { CartContext } from '../../context/Cart';

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  const cartItems = 1; 

  return (
    <div className="cart-container" onClick={toggleIsCartOpen}>
      <i className="fa-solid fa-cart-shopping"></i>
      { cartItems > 0 && (
        <span className='cart-container-items'>
          {cartItems >= 99 ? '99+' : cartItems}
        </span>
      )}
    </div>
  );
}

export default CartIcon;