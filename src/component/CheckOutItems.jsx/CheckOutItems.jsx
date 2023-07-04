import { useContext } from "react";
import { CartContext } from "../../context/Cart";

const CheckOutItems = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);
  console.log(cartItems)
  

  return (
    <>
      {cartItems.map((item) => (      
        <>
          <div className="checkout-item" key={item.id}>
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
                <i className="fa-solid fa-arrow-left"></i>
                <p>{item.quantity}</p>
                <i className="fa-solid fa-arrow-right" onClick={() => addItemToCart(item)}></i>
              </div>
            </div>
            <div className="checkout-item-remove">
              <i className="fa-solid fa-x" />
            </div>
          </div>
          <div className="checkout-item-bars"></div>
        </>
      ))}
    </>
  );
};

export default CheckOutItems;
