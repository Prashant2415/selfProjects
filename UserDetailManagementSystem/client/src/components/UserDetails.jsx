import React, { useState } from 'react'
import "../components/main.css"
import { Link, useLocation } from 'react-router-dom'
const UserDetails = () => {
    //access the user input values
    const location = useLocation();
    const [userValues, setUserValues]= useState(location.state);
    console.log(userValues)
  return (
    <div className='main-container'>
        <div className='container'>
        <div className='title-container'>
            <h1 className='title'>User Details Management System</h1>
        </div>
        <div className='add-new-record-container'>
            <Link to="/userInput" className='add-new-user'>Add new user</Link>
        </div>
        <div className='card-container'>
            <div className='sub-card-container'>
                <div className='label-container'>
                    <p className='p-tag'>User Name</p>
                    <p className='p-tag-gender'>Gender</p>
                    <p className='p-tag-age'>Age</p>
                    <p className='p-tag'>Email</p>
                    <p className='p-tag'>Password</p>
                </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default UserDetails
