import React from 'react'
import "../components/styles.css"
const ContactUs = () => {
    //handle contact us
    const handleContactUs = () => {
        console.log("Inside")
    }
    return (
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
                        <input className='form-input' type='text' placeholder='Enter your Full Name' /><br />
                        <input className='form-input' type='text' placeholder='Enter your query' /><br />
                        <input className='form-input' type='email' placeholder='Enter your email' /><br />
                        <textarea className='form-input' type="text" rows={4} cols={6} placeholder='Enter your message'></textarea><br />
                        <button className='submit-button' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
