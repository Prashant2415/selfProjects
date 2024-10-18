const express = require("express");
const router = express.Router();
const connection = require("./connection");

//POST API
router.post("/saveDetails",(req,res)=>{
    //console.log(req.body);
    const {name, title} = req.body;
    if(!name || !title)
    {
        res.status(422).json("Please enter some values before submission");
    }
    try{
        connection.query("INSERT INTO employeedetails.details SET ?",{name, title},(error,req)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            else{
                res.status(200).json(req.body);
            }
        })
    }
    catch(error)
    {
        res.status(422).json(error)
    }
})

//GET API
router.get("/getEmployeeDetails",(req,res)=>{
    try{
        connection.query("SELECT * FROM employeedetails.details",(error, result)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            else{
                res.status(200).json(result);
            }
        })
    }
    catch(error)
    {
        res.status(422).json(error);
    }
})

module.exports = router;