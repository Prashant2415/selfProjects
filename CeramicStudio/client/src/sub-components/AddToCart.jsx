import React, { useState } from 'react'
import "../components/styles.css"
import axios from 'axios'
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
      <div className='cart-main-container'>
        <div className='cart-heading-container'>
          <h1 className='cart-heading'>Cart</h1>
          <button className='cross-icon'>X</button>
        </div>
        <div className='cart-value-container'>
          <div className='cart-value-display'>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddToCart
