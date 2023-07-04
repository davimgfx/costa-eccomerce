import { useContext } from "react";
import imageCartEmpty from "../../assets/imageCartEmpty.png";
import { CartContext } from "../../context/Cart";
import CardItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
const CartDropdown = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  const { cartItems } = useContext(CartContext);
  console.log(cartItems)
  const itemsSubtotal =  cartItems.map((item) => item.quantity * item.price)
  .reduce((acc, item) => acc + item, 0);


  return (
    <div className="dropdown-div">
      <div className="dropdown-div-title">
        <h2>Your Shopping Cart ({cartCount})</h2>
        <i className="fa-solid fa-x" onClick={toggleIsCartOpen}></i>
      </div>
      {cartCount === 0 ? (
        <div className="dropdown-div-cart-empty">
          <img src={imageCartEmpty} />
          <h2>Your Cart is empty</h2>
          <button
            className="btn dropdown-div-subtotal-btn"
            onClick={toggleIsCartOpen}>
            Keep Browsing
          </button>
        </div>
      ) : (
        <div className="dropdown-div-cartItems">
          {cartItems.map((item) => (
            <CardItem key={item.id} cartItem={item} />
          ))}
        </div>
      )}
      {cartCount === 0 ? (
        ""
      ) : (
        <div className="dropdown-div-subtotal">
          <div className="dropdown-div-subtotal-title">
            <h2>Subtotal</h2>
            
            <p>Items: {cartCount}</p>
            <p>${itemsSubtotal}</p>
          </div>
          <Link to="../CheckOut">
            <button className="btn dropdown-div-subtotal-btn" onClick={toggleIsCartOpen}>
              Go to the CheckUp
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
