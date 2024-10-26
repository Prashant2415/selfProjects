import React from 'react'
import logo from "../../public/PM.png"
import carousel from "../../src/images/home2.jpg"
import "../components/styles.css"
const HomeTemplate = () => {
  return (
    <div className='container'>
        <div className='main-container'>
            <div className='top-header'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt='logo image'/>
                </div>
                <div className='header-menu-container'>
                    <a className='menu-links'>Home</a>
                    <a className='menu-links'>Shop</a>
                    <a className='menu-links'>About</a>
                    <a className='menu-links'>Gift Card</a>
                    <a className='menu-links'>Contact</a>
                </div>
            </div>
            <div className='carousel-container'>
                <div className='carousel-image'>
                    <img className='carousel' src={carousel} alt='carousel1'/>
                </div>
                <div className='carousel-inner-text'>
                    <p className='carousel-text'>CERAMIC STUIDO</p>
                    <button className='shop-now-button'>Shop Now</button>
                </div>
            </div>
            <div className='our-collection-container'>
                <div className='our-collection'>
                    <h3 className='our-collection-heading'>Our Collection</h3>
                    <p className='our-collection-text'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTemplate
