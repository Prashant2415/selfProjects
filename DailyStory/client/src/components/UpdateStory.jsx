import React, { useState } from 'react'
import "../components/index.css"
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const UpdateStory = (props) => {
    const location = useLocation();
    const storyValue = location.state;
    console.log(storyValue)
  const [storyInput, setStoryInput] = useState({ title: storyValue.title, description: storyValue.description });
  const [details, setDetails] = useState({title: storyValue.title||"", description: ""});

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setStoryInput({ ...storyInput, [name]: value });
    setDetails({...details,[name]: value});
  }
  const handleUpdateStories = async (event) => {
    event.preventDefault();
    const {id} = storyValue;
    const {title, description} = details;
    const response = await axios.put(`http://localhost:5000/updateById/${id}`,{title,description},{
        headers:{
            "Content-Type": "application/json"
        }
    }).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})
    // setStoryInput({ title: "", description: "" })
    // setDetails({ title: "", description: "" })
    navigate("/")
  }

  //delete specific
  const handleDeleteSpecific = async(id)=>{
    const response = await axios.delete(`http://localhost:5000/deleteById/${id}`,{
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res)=> {console.log(res)}).catch((error)=>{console.log(error)})
    navigate("/");
  }
  console.log(storyInput)
  return (
    <div className='container'>
      <div className='sub-container'>
        <div className='title-container'>
          <h1 className='title'>Update Stories</h1>
        </div>
        <div className='button-container'>
          <Link className='back-button' to="/">Back</Link>
        </div>
        <div className='input-container'>
          <div className='input-display'>
            <form className='form-container' onSubmit={handleUpdateStories}>
              <input className='input-title' type='text' value={storyInput.title} name='title' onChange={handleInput} placeholder='Enter title' /><br />
              <textarea className='input-description' type='text' value={storyInput.description} name='description' onChange={handleInput} placeholder='Enter title' rows={10} cols={30} /><br />
              <div className='form-button-container'>
              <button className='add-button' type='submit'>Update</button>
              <button className='add-button' onClick={()=>{handleDeleteSpecific(storyValue.id)}}>Delete</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateStory
