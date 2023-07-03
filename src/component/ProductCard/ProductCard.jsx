import React from 'react'


const ProductCard = ({ product }) => {
 const { name, price, imageUrl } = product
  return (
    <div className='product-card-container'>
        <div className='product-card-img-container'>
            <img src={imageUrl} alt="" className='product-card-img'/>
        </div>
        <div className='product-card-text-container'>
           <h2 className='product-card-text-h2'>{name}</h2>
           <p className='product-card-text-p'>$ {price}</p> 
        </div>
        <div className='product-card-buttons-container'>
            <button className='product-card-button btn'>Preview</button>
            <button className='product-card-button btn'>Add to Card</button>
        </div>
    </div>
  )
}

export default ProductCard