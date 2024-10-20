import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../components/index.css"
import { Link, useNavigate } from 'react-router-dom';
const DailyStories = () => {
    const [stories, setStories] = useState([]);
    const navigate = useNavigate();
    //Get stories data API call
    const getStoriesData = async () => {
        const response = await axios.get("http://localhost:5000/getStories").then((res) => {
            console.log("Response ", res.data);
            setStories(res.data);
        })
            .catch((error) => { console.log("Error ", error) })
    }

    //handle delete specific
    const handleDeleteSpecific = async (id) => {
        const response = await axios.delete(`http://localhost:5000/deleteById/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => { console.log(res) }).catch((error) => { console.log(error) })
        window.location.reload();
    }

    //handle update
    const handleUpdate = (story) => {
        console.log(story)
        navigate("/updatePage", { state: story })
    }

    //handle view
    const handleView =(story)=>{
        navigate("/viewStory",{state : story})
    }

    useEffect(() => {
        getStoriesData();
    }, [])
    return (
        <div className='container'>
            <div className='sub-container'>
                <div className='title-container'>
                    <h1 className='title'>Daily Stories</h1>
                </div>
                <div className='button-container'>
                    <Link className='add-stories' to="/addStories">Add Stories</Link>
                </div>

                <div className='display-container'>
                    {stories.map((s) => {
                        return (
                            <div className='display-values' key={s.id}>
                                <div className='display-inner-values'>
                                    <h2 className='display-title'>{s.title}</h2>
                                    <p className='display-description'>{s.description}</p>
                                </div>
                                <div className='display-button-container'>
                                    <button className='display-button' onClick={() => { handleView(s) }}>View</button>
                                    <button className='display-button' onClick={() => { handleUpdate(s) }}>Update</button>
                                    <button className='display-button' onClick={() => { handleDeleteSpecific(s.id) }}>Delete</button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default DailyStories
