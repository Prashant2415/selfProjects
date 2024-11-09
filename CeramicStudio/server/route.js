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

//get product by category
router.get("/category/:category",(req,res)=>{
    const {category} = req.params;
    try 
    {
        connection.query("SELECT * FROM ceramicstudio.products WHERE category=?",category,(error, result)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            else
            {
                res.status(200).json(result);
            }
        })
    } 
    catch(error) 
    {
        res.status(422).json(error);
    }
})

//add to cart API calls
router.post("/addtocart",(req,res)=>{
    const {productname, description, category, quantity,imageurl} = req.body;
    console.log(req.body);
    if(!productname || !description || !category || !quantity || !imageurl)
    {
        res.status(422).json("Please enter the fields")
    }
    try 
    {
        connection.query("INSERT INTO ceramicstudio.cart SET ?",{productname, description, category, quantity,imageurl},(error,result)=>{
            if(error)
            {
                res.status(422).json(error)
            }
            else
            {
                res.status(201).json(result)
            }
        })
    } 
    catch 
    (error) 
    {
        res.status(422).json(error)    
    }
})

//get all cart data
router.get("/getAllCartDetails",(req,res)=>{
    try{
        connection.query("SELECT * FROM ceramicstudio.cart",(error,result)=>{
            if(error)
            {
                res.status(422).json(error);
            }
            else
            {
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