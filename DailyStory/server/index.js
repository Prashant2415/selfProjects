const express = require("express");
const mysql = require("mysql2");
require("./connection");
const cors = require("cors");
const port = 5000;

const router = require("./route");
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.listen(port,()=>{
    console.log("Running server");
})