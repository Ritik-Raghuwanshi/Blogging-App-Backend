//Creating Instance of express
const express= require("express");
//creating server
const app= express();
//Importing .env file into process variable
require("dotenv").config();
//Use the Middleware
app.use(express.json());//Agar Json Parse Karna  to ye middleware include karna padega
//mount
const blog= require("./routes/blog.js");
app.use("/api/v1",blog);
// const blog=require("")


const connectDB=require("./database/connection.js");
connectDB();
//Activating the Server
const PORT= process.env.PORT||5000;//Process variable me se PORT Number Leti h or nahi mila to 5000 degi
app.listen(PORT,(req,res)=>{
console.log(`Server Started at Port : ${PORT}`)
})

// app.get("/",(req,res)=>{
// res.send("Server Started");
// })