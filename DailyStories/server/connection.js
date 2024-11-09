const mysql = require("mysql2");
const connection = mysql.createConnection(
    {
        user: "root",
        password: "P@th@2415finder",
        host: "localhost",
        database: "dailystories"
    }
)

connection.connect((error)=>{
    if(error) throw error;
    console.log("Successfully connected to the database");
})
module.exports = connection;