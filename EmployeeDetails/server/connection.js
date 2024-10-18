//use to connect database
const mysql = require("mysql2");
const connect = mysql.createConnection({
    user: "root",
    password: "P@th@2415finder",
    host: "localhost",
    database: "employeedetails"
})

connect.connect((error)=>{
    if(error) throw error;
    console.log("Connected to database");
})

module.exports = connect;