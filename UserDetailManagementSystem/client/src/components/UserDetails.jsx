import React, { useEffect, useState } from 'react'
import "../components/main.css"
import axios from "axios"
import { Link, useLocation } from 'react-router-dom'
const UserDetails = () => {
    const [detailList, setDetailList] = useState([]);
    //get user details api
    const getUserDetails = async () => {
        const response = await axios.get("http://localhost:8081/getAllUserDetails").then((res) => {
            setDetailList(res.data);
        })
            .catch((error) => { console.log(error) })
    }

    //useEffect
    useEffect(() => {
        getUserDetails();
    }, [])
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
                    <div className='sub-card-container'>
                        {detailList.map((d) => {
                            return (
                                <div className='label-container' key={d.id}>
                                    <p className='p-tag'>{d.name}</p>
                                    <p className='p-tag-gender'>{d.gender}</p>
                                    <p className='p-tag-age'>{d.age}</p>
                                    <p className='p-tag'>{d.email}</p>
                                    <p className='p-tag'>{d.password}</p>
                                </div>

                            )
                        })}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default UserDetails
