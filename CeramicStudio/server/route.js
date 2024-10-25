const express = require("express");
const connection = require("./connection");
const router = express.Router();

//POST API
router.post("/saveProducts",(req,res)=>{
    const {productname, description, price, imageurl} = req.body;
    if(!productname || !description || !price || !imageurl){
        res.status(422).json("Please enter the required values");
    }
    try
    {
        connection.query("INSERT INTO ceramicstudio.products SET ?",{productname, description, price, imageurl},(error,response)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            else
            {
                res.status(201).json(response.body);
            }
        })
    }
    catch (error)
    {
        res.status(422).json(error);    
    }
})

//GET API
router.get("/getAllProducts",(req,res)=>{
    try
    {
        connection.query("SELECT * FROM ceramicstudio.products",(error,response)=>{
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
    catch (error) 
    {
        res.status(422).json(error);
    }
})


module.exports = router;