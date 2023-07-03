
import { useContext } from 'react';
import { CartContext } from '../../context/Cart';
const CartDropdown = () => {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
    <div className="dropdown-div">
         <i className="fa-solid fa-x" onClick={toggleIsCartOpen}></i>
         <button className='btn'>Go to the CheckUp</button>
    </div>
  
  )
}

export default CartDropdown