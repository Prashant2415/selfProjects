import React, { useEffect, useState } from 'react'
import "../components/style.css"
import Header from './Header'
import axios from "axios"
const HomePage = () => {
  const [stories, setStories] = useState([]);
  const [addFlag, setAddFlag] = useState(false);

  const [addStory, setAddStory] = useState({subject:"",story:"",date:"",storyid:""})
  //get api
  const getStories = async () => {
    const response = await axios.get("http://localhost:8081/getAllStories").then((response) => {
      setStories(response.data)
    })
  }

  //handle add new stories
  const handleAddNewStories = async () => {
    setAddFlag(true);
    
  }

  //handle add new story form
  const handleAddStoryFormInput =(event)=>{
    const {name, value}= event.target;
    setAddStory([...addStory,{[name]: value}])
  }
  console.log(addStory)
  useEffect(() => {
    getStories();
  }, [])
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='main-container'>
          <div className='add-new-story'>
            <h1>Daily Stories</h1>
            <button className='add-new-story-button' onClick={handleAddNewStories}>Add new story</button>
          </div>

          <div className='display-stories-container'>
            {stories.map((s) => {
              return (
                <div className='display-stories' key={s.id}>
                  <p className='display-subject'>{s.subject}</p>
                  <p className='display-text'>{s.story}</p>
                  <button className='view-button'>View</button>
                </div>
              )
            })}
          </div>
        </div>
        <div className='display-add-display-view-container'>
          {addFlag ? (
            <div className='add-new-story-container'>
              <form className='story-form'>
                <label className='form-label'>Subject</label><br/>
                <input className='form-input-subject' type='text' placeholder='Enter your ' value={addStory.subject} name='subject' onChange={handleAddStoryFormInput}/><br/>
                <label form-label>Date</label><br/>
                <input className='form-input-date' type='date' placeholder='Enter your ' value={addStory.date} name='date' onChange={handleAddStoryFormInput}/><br/>
                <label className='form-label'>Your Story</label><br/>
                <textarea className='form-input-story' type='text' placeholder='Enter your ' value={addStory.story} name='story' rows={30} cols={110} onChange={handleAddStoryFormInput}/><br/>
              </form>

            </div>
          ) : (
            <>Hello</>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage
