import React from 'react'
import logo from "../images/PM.png"
import "../components/style.css"
const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img className='logo-image' src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default Header
