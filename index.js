// const place = "World";
// const greeting = "Hello";
// // console.log('Hello, %s',place);
// console.log(`${greeting},${place}`); //Template literal (backticks ``)

require("dotenv").config();

const express= require("express");
const app=express();
const port=process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});