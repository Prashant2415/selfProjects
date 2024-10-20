const express = require("express");
const router = express.Router();
const connection = require("./connection");

//POST API
router.post("/saveStory",(req,res)=>{
    const {title,description} = req.body;
    if(!title || !description)
    {
        res.status(422).json("Please enter some values");
    }
    try{
        connection.query("INSERT INTO dailystories.stories SET ?",{title,description},(error,req)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            else{
                res.status(201).json(req.body);
            }
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})

//GET API
router.get("/getStories",(req,res)=>{
    try{
        connection.query("SELECT * FROM dailystories.stories",(error, response)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            else
            {
                res.status(200).json(response);
            }
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})

//DELETE API based on id
router.delete("/deleteById/:id",(req,res)=>{
    const {id} = req.params;
    try{
        connection.query("DELETE from dailystories.stories WHERE id= ?",id,(error,response)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            else
            {
                res.status(200).json(response);
            }
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})

module.exports = router;