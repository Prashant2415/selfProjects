import React from 'react'
import "../components/styles.css"
import logo from "../../public/logo.png"
const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img className='logo' src={logo} alt='logo'/>
      </div>
    </div>
  )
}

export default Header
