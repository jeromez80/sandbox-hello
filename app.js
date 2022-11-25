/*****************************
 * 
 * This is a sample node script.
 * 
 */
const express = require('express');
const moment = require('moment');
console.log('Hello there');
console.log(`Time now is ${moment().date()}`);

const router=express.Router()

// Handling request using router
router.get("/home",(req,res,next)=>{
    res.send("This is the homepage request")
})

// Handling login request
router.get("/login",(req,res,next)=>{
    res.send("This is the login request")
  })
  

const app=express()
  
// Handling routes request
app.use("/",router)

app.listen((3000),()=>{
    console.log("Server is Running")
})