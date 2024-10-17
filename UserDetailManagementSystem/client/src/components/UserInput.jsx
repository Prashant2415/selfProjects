import React, { useState } from 'react'
import "../components/main.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const UserInput = () => {
    const [details, setDetails] = useState({name: "", gender:"", email: "", password: ""});
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    //handleUserInput
    const handleUserInput =(event)=>{
        const {name, value} = event.target;
        setDetails({...details,[name]: value});
    }
    //save user details POST api
    //handleFormData
    const handleFormData = async(event)=>{
      event.preventDefault();
      setList([...list,details])
      const { name, gender, email, password } = details;
      if (name == "") {
        alert("enter name")
      }
      else if (email == "") {
        alert("enter email")
      }
      else if (!email.includes("@")) {
        alert("enter a valid email address")
      }
      else if (gender == "") {
        alert("enter gender")
      }
      else if (password == "") {
        alert("enter password")
      }
      else {
  
        // const data = await axios.post("/create", userList)
        const res = await fetch("http://localhost:8081/saveDetails", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name, gender, email, password
          })
      });
      setDetails({name: "", gender:"", email: "", password: ""})        
      }
      navigate("/");
    }
  return (
    <div className='form-main-container'>
      <div className='title-container'>
        <h1 className='title'>User Inputs</h1>
      </div>
      <div className='form-container'>
        <form className='form' onSubmit={handleFormData}>
            <label className='label-values'>FullName</label>
            <input className='input-values' type='text' value={details.name} name='name' placeholder='Enter your full name' onChange={handleUserInput}/><br/>
            <label className='label-values'>Gender</label>
            <input className='input-values' type='text' value={details.gender} name='gender' placeholder='Enter your gender' onChange={handleUserInput}/><br/>
            <label className='label-values'>Email</label>
            <input className='input-values' type='email' value={details.email} name='email' placeholder='Enter your email' onChange={handleUserInput}/><br/>
            <label className='label-values'>Password</label>
            <input className='input-values' type='password' value={details.password} name='password' placeholder='Enter your password' onChange={handleUserInput}/><br/>
            <button className='submit-button' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default UserInput
