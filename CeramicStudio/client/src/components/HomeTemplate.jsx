import React from 'react'
import logo from "../images/PM.png"
import "../components/styles.css"
import Carousel from './Carousel'
import OurCollection from './OurCollection'
import ProductCollection from './ProductCollection'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Header from './Header'
const HomeTemplate = () => {
    
    return (
        <div className='container'>
            <Header/>
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
