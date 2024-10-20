import React, { useState } from 'react'
import "../components/index.css"
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const ViewStory = (props) => {
    const location = useLocation();
    const storyValue = location.state;
    console.log(storyValue)
  const [storyInput, setStoryInput] = useState({ title: storyValue.title, description: storyValue.description });
  const navigate = useNavigate();
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
          <h1 className='title'>View Stories</h1>
        </div>
        <div className='button-container'>
          <Link className='back-button' to="/">Back</Link>
        </div>
        <div className='view-container'>
          <div className='view-inner-container'>
            <h2 className='view-title'>{storyValue.title}</h2>
            <p className='view-description'>{storyValue.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewStory
