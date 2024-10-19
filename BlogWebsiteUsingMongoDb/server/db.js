const mongoose = require("mongoose");

const connection = async ()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://prashantmendhe:Patha2415@userdetails.14npv.mongodb.net/userdb?retryWrites=true&w=majority&appName=userdetails");
        console.log("Connected with database",connect.connection.host);
    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connection;