import React, { useState } from 'react'
import "../components/main.css"
import { useNavigate } from 'react-router-dom';
const UserInput = () => {
    const [details, setDetails] = useState({fullName: "", gender:"", age: "", email: "", password: ""});
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    //handleUserInput
    const handleUserInput =(event)=>{
        const {name, value} = event.target;
        setDetails({...details,[name]: value});
    }

    //handleFormData
    const handleFormData =(event)=>{
        event.preventDefault();
        setList((l)=>[...l,details]);
        navigate("/");
        setDetails({fullName: "", gender:"", age: "", email: "", password: ""});
    }
    console.log("list ", list)
  return (
    <div className='form-main-container'>
      <div className='title-container'>
        <h1 className='title'>User Inputs</h1>
      </div>
      <div className='form-container'>
        <form className='form' onSubmit={handleFormData}>
            <label className='label-values'>FullName</label>
            <input className='input-values' type='text' value={details.fullName} name='fullName' placeholder='Enter your full name' onChange={handleUserInput}/><br/>
            <label className='label-values'>Gender</label>
            <input className='input-values' type='text' value={details.gender} name='gender' placeholder='Enter your gender' onChange={handleUserInput}/><br/>
            <label className='label-values'>Age</label>
            <input className='input-values' type='number' value={details.age} name='age' placeholder='Enter your age' onChange={handleUserInput}/><br/>
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
