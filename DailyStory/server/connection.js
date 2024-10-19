const mysql = require("mysql2");
const connect = mysql.createConnection({
    user: "root",
    password: "P@th@2415finder",
    host: "localhost",
    database: "dailystories"
});

connect.connect((error)=>{
    if(error) throw error
    console.log("Connection established");
})

module.exports = connect;
