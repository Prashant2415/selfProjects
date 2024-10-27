import React from 'react'
import "../components/styles.css"
import logo from "../images/PM.png"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='top-header'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt='logo image' />
            </div>
            <div className='header-menu-container'>
                <Link to="/" className='menu-links'>Home</Link>
                <Link to="/products" className='menu-links'>Shop</Link>
                <Link to="" className='menu-links'>About</Link>
                <Link to="" className='menu-links'>Gift Card</Link>
                <Link to="" className='menu-links'>Contact</Link>
            </div>
        </div>
    )
}

export default Header
