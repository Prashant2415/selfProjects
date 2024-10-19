// mongodb+srv://prashantmendhe:<db_password>@userdetails.14npv.mongodb.net/?retryWrites=true&w=majority&appName=userdetails

const express = require("express");
const cors = require("cors");
const connection = require("./db");
const itemModel = require("./model/Items");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
connection();

app.get("/", async(req,res)=>{
    const response = await itemModel.find();
    return res.json({items: response});
})
app.listen(port,()=>{
    console.log("App is running");
})