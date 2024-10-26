import React, { useEffect, useState } from 'react'
import logo from "../../public/PM.png"
import carousel from "../../src/images/home2.jpg"
import "../components/styles.css"
import image from "../images/BottleOneImage.webp"
import axios from "axios"
const HomeTemplate = () => {
    const [product, setProduct] = useState([]);
    //getallproduct api
    const getallproduct =async () =>{
        const response = axios.get("http://localhost:8081/getAllProducts").then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        }).catch((error)=>{console.log(error)})
    }


    //handle contact us
    const handleContactUs =()=>{
        console.log("Inside")
    }
    useEffect(()=>{
        getallproduct();
    },[])
  return (
    <div className='container'>
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
        <div className='main-container'>
           
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
            <div className='product-collection'>
                <div className='product-container'>
                    {product.map((p)=>(
                        <div className='product-card' key={p.id}>
                        <div className='product-image'>
                            <img className='p-image' src={`../src/images/${p.imageurl}.webp`} alt='{p.productname}'/>
                        </div>
                        <div className='product-heading'>
                            <p className='product-title'>{p.productname}</p>
                            <p className='product-price'>${p.price}.00</p>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
            <div className='contact-us-container'>
                <div className='contact-container'>
                    <div className='contact-description'>
                        <div className='contact-info-one'>
                        <h3 className='contact-info contact-title'>PM STUDIO</h3>
                        <p className=' contact-info contact-address'><b>Address:</b> 1741/10 Sarawati vihar Rampur Chappar</p>
                        <p className=' contact-info contact-phone'><b>Contact:</b> 123-456-7890</p>
                        <p className=' contact-info contact-email'><b>Email:</b> pmstudio@gmail.com</p>
                        </div>
                        <div className='contact-info-two'>
                            <p className='contact-shipping-method'><b>FAQ / Shipping & Returns / Store Policy / Payment Methods</b></p>
                        </div>
                    </div>
                    <div className='contact-us-form'>
                        <form className='contact-form' onSubmit={handleContactUs}>
                            <input className='form-input' type='text' placeholder='Enter your Full Name'/><br/>
                            <input className='form-input' type='text' placeholder='Enter your query'/><br/>
                            <input className='form-input' type='email' placeholder='Enter your email'/><br/>
                            <textarea className='form-input' type="text" rows={4} cols={6} placeholder='Enter your message'></textarea><br/>
                            <button className='submit-button' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='footer-container'>
                <div className='footer-content'>
                    <p className='footer-text'>© 2035 by Ceramic-Studio. Powered and secured by PM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTemplate
