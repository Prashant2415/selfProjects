import React from 'react'
import { useLocation } from 'react-router-dom'
import "../components/styles.css"
import Header from '../components/Header';
const ProductItem = () => {
    const value = useLocation();
    const {id, productname , description , imageurl, category, price} = value.state;

  return (
   <div className='main-item-container'>
    <div>
        <Header/>
    </div>
    <div className='item-container'>
      <div className='main-item'>
        <div className='image-item'>
            <img className='image-url' src={`../src/images/${imageurl}.webp`} alt={productname}/>
        </div>
        <div className='item-detail'>
            <h3 className='item-title'>{productname}</h3>
            <p className='item-price'>{price}</p>
            <p className='item-description'>{description}</p>
            <button className='button add-to-card'>Add to Cart</button>
            <br/>
            <button className='button buy-now-button'>Buy Now</button>
        </div>
      </div>
      </div>
   </div>
  )
}

export default ProductItem
