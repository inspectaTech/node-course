// const express = require("express");
// const port = process.env.port || 3000;
// const app = express();
//
// require("./db/mongoose");

const User = require("../models/user");

// app.post('/user/', async (req,res) => {
//   // console.log("[user body]",req.body);
//   try{
//
//     const user = new User(req.body);
//     await user.save().then(() => {
//       res.send(user);
//     }).catch((err) => {
//       console.log("[user error] an error has occured",err);
//       res.status(404).send({error:"an error has occured"})
//     })
//   }catch(error){
//     console.log(error);
//   }
// })//post
//
//
// app.listen(port,() => {
//   console.log('[listen] Server up on port ', port);
// })
