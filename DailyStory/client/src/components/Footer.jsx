import React from 'react'
import logo from "../../public/logo.png"
const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-inner-container'>
                <div className='footer-logo'>
                    <img className='logo' src={logo} alt='logo' />
                    <p className='copyright'>@copyrightme</p>
                </div>
                <div className='contact-us-container'>
                    <p className='contact'>Contact us</p>
                    <div className='contact-details'>
                    <p className='contact-us'>abcd@gmail.com</p>
                    <p className='phone-number'>1234567890</p>
                    </div>
                </div>
                <div className='extra-container'>
                    <p className='follow-us'>Follow us</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
