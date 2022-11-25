/*****************************
 * 
 * This is a sample node script.
 * 
 */
const express = require('express');
const moment = require('moment');

const OAuth= require('oauth').OAuth;

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
    console.log("Server is Running on port 3000")
})

const engine = require('engine.io');
const server = engine.listen(8000);

server.on('connection', socket => {
  socket.send('utf 8 string');
  socket.send(Buffer.from([0, 1, 2, 3, 4, 5])); // binary data
});