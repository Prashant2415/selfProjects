import React from 'react'
import logo from "../images/PM.png"
import "../components/styles.css"
import Carousel from './Carousel'
import OurCollection from './OurCollection'
import ProductCollection from './ProductCollection'
import ContactUs from './ContactUs'
import Footer from './Footer'
import {Link} from "react-router-dom"
const HomeTemplate = () => {
    
    return (
        <div className='container'>
            <div className='top-header'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt='logo image' />
                </div>
                <div className='header-menu-container'>
                    <Link to="" className='menu-links'>Home</Link>
                    <Link to="/products" className='menu-links'>Shop</Link>
                    <Link to="" className='menu-links'>About</Link>
                    <Link to="" className='menu-links'>Gift Card</Link>
                    <Link to="" className='menu-links'>Contact</Link>
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
