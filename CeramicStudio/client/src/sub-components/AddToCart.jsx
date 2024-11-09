import React, { useState } from 'react'
import "../components/styles.css"
import axios from 'axios'
import BottleImage from "../images/BottleOneImage.webp"
import Header from '../components/Header'
const AddToCart = () => {
  const [cartDetails, setCartDetails] = useState([])
  //get all cart details
  const getAllCartDetails = async ()=>{
    const response = await axios.get("http://localhost:8081/getAllCartDetails").then((res)=>{
      setCartDetails(res.data);
      console.log(res)}).catch((error)=>{console.log(error)})
  }
  return (
    <div className='container'>
      <div>
        <Header/>
    </div>
      <div className='cart-main-container'>
        <div className='my-cart-container'>
          <h1 className='my-cart-heading'>My Cart</h1>
          <div className='my-cart-details'>
            <div className='my-cart-image-container'>
              <img className='my-cart-image' src={BottleImage} alt='bottle image'/>
              <div className='my-cart-values-container'>
              <p className='my-cart-product'>I'm Product</p>
              <p className='my-cart-price'>$25.00</p>
            </div>
            </div>
            <div className='my-cart-quantity-container'>
              <button className='my-cart-quantity'>-</button>
              <span className='my-cart-quantity'>0</span>
              <button className='my-cart-quantity'>+</button>
            </div>
            <div className='my-cart-remove-container'>
              <button className='my-cart-remove-button'>Remove</button>
            </div>
            
          </div>
        </div>
        <div className='add-to-cart-partition'></div>
        <div className='order-summary-container'>
          <h1 className='order-summary-heading'>Order Summary</h1>
          <div className='order-summary-details'>
            <div className='order-summary-subtotal-container'>
              <p className='order-summary-subtotal'>Subtotal</p>
              <p className='order-summary-subtotal-price'>$25.00</p>
            </div>
            <div className='order-summary-total-container'>
            <p className='order-summary-total'>Total</p>
            <p className='order-summary-total-price'>$25.00</p>
            </div>
          </div>
          <div className='order-summary-check-container'>
            <button className='order-summary-checkout-button'>Checkout</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddToCart
