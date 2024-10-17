//to connect with Database
const mysql = require("mysql2");
const connect = mysql.createConnection({
    user:"root",
    password:"P@th@2415finder",
    host:"localhost",
    database:"userdetails"
});
connect.connect((err)=>{
    if(err) throw err;
    console.log("Connected with database");
})
module.exports = connect;