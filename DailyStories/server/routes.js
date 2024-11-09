const express = require("express");
const connection = require("./connection");

const route = express.Router();

//API's
//POST API
route.post("/saveStory",(req,res)=>{
    const {storyid,subject,story,date} = req.body;
    if(!storyid || !subject || !story || !date)
    {
        res.status(422).json("Please enter the values");
    }
    try{
        connection.query("INSERT INTO dailystories.stories SET?",{storyid,subject,story,date},(error,response)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            res.status(201).json(response.body);
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})

//GET API
route.get("/getAllStories",(req,res)=>{
    try{
        connection.query("SELECT * FROM dailystories.stories",(error,response)=>{
            if(error)
                {
                    res.status(422).json(error);
                }
                res.status(200).json(response);
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})

//DELETE API
route.delete("/deleteByStoryId/:storyid",(req,res)=>{
    const {storyid} = req.params;
    try{
        connection.query("DELETE FROM dailystories.stories WHERE storyid = ? ",storyid,(error,response)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            res.status(201).json(response);
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})
module.exports = route;