import React from 'react'
import carousel from "../../src/images/home2.jpg"
import "../components/styles.css"
const Carousel = () => {
  return (
    <div className='carousel-container'>
                <div className='carousel-image'>
                    <img className='carousel' src={carousel} alt='carousel1'/>
                </div>
                <div className='carousel-inner-text'>
                    <p className='carousel-text'>CERAMIC STUIDO</p>
                    <button className='shop-now-button'>Shop Now</button>
                </div>
            </div>
  )
}

export default Carousel
