import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/Cart";
const CheckOutItems = () => {
  const { cartItems, addItemToCart, removeItemToCart, clearItemToCart } =
    useContext(CartContext);
  const itemsSubtotal = cartItems
    .map((item) => item.quantity * item.price)
    .reduce((acc, item) => acc + item, 0);
  const navigate = useNavigate();
  console.log(cartItems)
  return (
    <>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div className="checkout-item">
            <div className="checkout-item-div-image">
              <img
                src={item.imageUrl}
                alt="product"
                className="checkout-item-image"
              />
            </div>
            <div className="checkout-item-infos">
              <h2>{item.name}</h2>

              <p>$ {item.price}</p>
            </div>
            <div className="checkout-item-items">
              <h2>Quantity</h2>
              <div className="checkout-item-items-quantity">
                <i
                  className="fa-solid fa-arrow-left"
                  onClick={() => removeItemToCart(item)}></i>
                <p>{item.quantity}</p>
                <i
                  className="fa-solid fa-arrow-right"
                  onClick={() => addItemToCart(item)}></i>
              </div>
            </div>
            <div className="checkout-item-remove">
              <i
                className="fa-solid fa-x"
                onClick={() => clearItemToCart(item)}
              />
            </div>
          </div>
          <div className="checkout-item-bars"></div>
        </div>
      ))}
      {itemsSubtotal === 0 ? (
        <div className="checkout-total">
          <div className="checkout-total-title">
            <h2>Your Car is Empty </h2>
          </div>

          <button
            className="btn"
            onClick={() => {
              navigate("../shop");
            }}>
            Go to the shop
          </button>
        </div>
      ) : (
        <div className="checkout-total">
          <div className="checkout-total-title">
            <h2>Total:</h2>
            <p>$ {itemsSubtotal}</p>
          </div>
          <button className="btn">Buy now</button>
        </div>
      )}
    </>
  );
};

export default CheckOutItems;
