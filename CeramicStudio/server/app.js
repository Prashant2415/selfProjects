const express = require("express");
const cors = require("cors");
const mysql = require("mysql2")
require("./connection")
const port = 8081;

const app = express();
app.use(express.json());
app.use(cors());
app.listen(port,()=>{
    console.log("Server started");
})