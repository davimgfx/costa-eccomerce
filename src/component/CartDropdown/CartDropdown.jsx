
import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
import CardItem from "../CartItem/CartItem"
import cartItems from "../../context/Cart"

const CartDropdown = () => {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  const { cartItems } = useContext(CartContext)

  return (
    <div className="dropdown-div">
         <i className="fa-solid fa-x" onClick={toggleIsCartOpen}></i>
         {cartItems.map((item) => (
          <CardItem key={item.id} cartItem={item}/>
         ))}
         
         <button className='btn'>Go to the CheckUp</button>
    </div>
  
  )
}

export default CartDropdown