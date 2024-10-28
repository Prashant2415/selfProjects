import React from 'react'
import { useLocation } from 'react-router-dom'
import "../components/styles.css"
import Header from '../components/Header';
import { CommonBackButton, CommonTitlePara } from '../components/commonComponents/Common';
const ProductItem = () => {
    const value = useLocation();
    const {id, productname , description , imageurl, category, price} = value.state;
    const policyData = [
      {
        title: "Product Info",
        para: "I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item."
      },
      {
        title: "Return & Refund Policy",
        para: "I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase. Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence."
      },
      {
        title: "Shipping Info",
        para: "I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost. Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers that they can buy from you with confidence."
      }
    ]
  return (
   <div className='main-item-container'>
    <div>
        <Header/>
    </div>
    <div className='item-container'>
    <CommonBackButton>Back</CommonBackButton>
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
      <div className='policy-container'>
        {
          policyData.map((pd,index)=>(
            <CommonTitlePara key={index} titleProps={pd.title} paraProps={pd.para}></CommonTitlePara>
          ))
        }
      </div>
      </div>
   </div>
  )
}

export default ProductItem
