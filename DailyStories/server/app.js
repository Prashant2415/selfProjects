const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("./connection");
const port = 8081;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})