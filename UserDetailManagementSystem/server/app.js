//import dependencies
const express = require("express");
const cors = require("cors");
require("./connections");
const mysql = require("mysql2");
const router = require("./route");
const port = 8081;
//
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.get("/",(req,res)=>{
    res.send("server start")
})
app.listen(port,()=>{
    console.log("Server started");
})