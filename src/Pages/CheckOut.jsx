import { CheckOutItems } from "../component";
const CheckOut = () => {
  return (
    <div className="checkout-card">
      <h2 className="checkout-card-title">Shopping cart</h2>
      <CheckOutItems />
    </div>
  );
};

export default CheckOut;
