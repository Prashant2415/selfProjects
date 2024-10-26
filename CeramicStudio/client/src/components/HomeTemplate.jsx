import React from 'react'
import logo from "../images/PM.png"
import "../components/styles.css"
import Carousel from './Carousel'
import OurCollection from './OurCollection'
import ProductCollection from './ProductCollection'
import ContactUs from './ContactUs'
import Footer from './Footer'
const HomeTemplate = () => {
    
    return (
        <div className='container'>
            <div className='top-header'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt='logo image' />
                </div>
                <div className='header-menu-container'>
                    <a className='menu-links'>Home</a>
                    <a className='menu-links'>Shop</a>
                    <a className='menu-links'>About</a>
                    <a className='menu-links'>Gift Card</a>
                    <a className='menu-links'>Contact</a>
                </div>
            </div>
            <div className='main-container'>
                <Carousel />
                <OurCollection />
                <ProductCollection />
                <ContactUs />
                <Footer />
            </div>
        </div>
    )
}

export default HomeTemplate
