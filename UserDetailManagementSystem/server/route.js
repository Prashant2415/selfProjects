const express = require("express");
const route = express.Router();
const connection = require("./connections");

//Post api
route.post("/saveDetails",(req,res)=>{
    //console.log(req.body);
    const {name, gender, email, password} = req.body;
    if(!name || !gender || !email || !password)
    {
        res.status(422).json("Please enter all the required fields");
    }
    try{
        connection.query("SELECT * FROM userdetails.details WHERE email = ?",email,(err,req)=>{
            if(req.length)
            {
                res.status(422).json("The email address already exists");
            }
            else{
                connection.query("INSERT INTO userdetails.details SET ?",{name ,gender ,email ,password},(err,req)=>{
                    if(err)
                    {
                        res.status(422).json(err);
                    }
                    else{
                        res.status(201).json(req.body);
                    }
                })
            }
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})

//GET api
route.get("/getAllUserDetails",(req,res)=>{
    try{
        connection.query("SELECT * FROM userdetails.details",(err,result)=>{
            if(err) throw err;
            res.status(200).json(result);
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})
module.exports= route;