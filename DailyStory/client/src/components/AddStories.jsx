import React, { useState } from 'react'
import "../components/index.css"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const AddStories = () => {
  const [storyInput, setStoryInput] = useState({ title: "", description: "" });
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setStoryInput({ ...storyInput, [name]: value });
  }
  const handleInputStories = async (event) => {
    event.preventDefault();
    setDetails([...details, storyInput])
    const { title, description } = storyInput;
    
    const response = await axios.post("http://localhost:5000/saveStory",{title,description},{
      headers:{
        "Content-Type": "application/json"
      }
    }).then((res)=> {console.log(res)}).catch((error)=>{console.log(error)})
    setStoryInput({ title: "", description: "" });
    navigate("/");
  }
  console.log(storyInput)
  return (
    <div className='container'>
      <div className='sub-container'>
        <div className='title-container'>
          <h1 className='title'>Add Stories</h1>
        </div>
        <div className='button-container'>
          <Link className='back-button' to="/">Back</Link>
        </div>
        <div className='input-container'>
          <div className='input-display'>
            <form className='form-container' onSubmit={handleInputStories}>
              <input className='input-title' type='text' value={storyInput.title} name='title' onChange={handleInput} placeholder='Enter title' /><br />
              <textarea className='input-description' type='text' value={storyInput.description} name='description' onChange={handleInput} placeholder='Enter title' rows={10} cols={30} /><br />
              <button className='add-button' type='submit'>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStories
