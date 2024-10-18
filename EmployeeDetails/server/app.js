// importing dependencies
const express = require("express");
const cors = require("cors");
const  mysql = require("mysql2");
require("./connection");
const router =require("./router");
const port = 8081;

const app = express();
app.use(express.json());
app.use(router);
//listen
app.listen(port,()=>{
    console.log("Running server");
})