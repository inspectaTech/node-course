// const express = require("express");
// const router = new express.Router();
// const auth = require('../middleware/auth');
//
// const User = require("../models/user");
//
// router.post('/user/', async (req,res) => {
//   // console.log("[user body]",req.body);
//   try{
//
//     const user = new User(req.body);
//
//     // generate the user token
//     const token = await user.generateAuthToken();
//
//     await user.save()
//       res.send(user);
//   }catch(e){
//     console.log("[user error] an error has occured",e);
//     res.status(404).send(e);
//     // res.status(404).send({error:"an error has occured"});
//   }
// })//post
//
// //  find out why this doesn't work - the one above does
// // router.post('/user/', async (req,res) => {
// //   // console.log("[user body]",req.body);
// //   try{
// //
// //     const user = new User(req.body);
// //
// //     // generate the user toke
// //     const token = await user.generateAuthToken();
// //
// //     await user.save().then(() => {
// //       res.send(user);
// //     }).catch((err) => {
// //       console.log("[user error] an error has occured",err);
// //       res.status(404).send({error:"an error has occured"})
// //     })
// //   }catch(error){
// //     console.log(error);
// //   }
// // })//post
//
// router.post('/user/login',async (req, res) => {
//   try {
//     console.log("[user login] running");
//     const user = await User.findByCredentials(req.body.email, req.body.password);
//
//     const token = await user.generateAuthToken();// custom schema method
//     // not being generated on the User (uppercase USER)
//     // uppercase 'U' User (mongoose model) works for all users (user collection as a whole)
//     // - we want to work with just one specific user
//
//
//     console.log("[user login]",user)
//     res.send({ user, token });
//   } catch (e) {
//     res.status(400).send();
//   }
// })//login

router.post('/user/logout',auth, async (req, res) => {
  try {
    // console.log("[logout] running");
    // console.log("[logout] req token",req.token);
    req.user.tokens = req.user.tokens.filter((token) => {
      //this is going to return all the tokens, except the one given in the header (removing it from the array)
      // console.log("[logout filter] token",token.token);
      return token.token !== req.token;
    });
    // console.log("[logout] saving...");
    await req.user.save();

    // console.log("[logout] sending...");
    res.send();

  } catch (e) {
    console.log("[logout] error",e);
    res.status(500).send();
  }
})

router.post('/user/logoutAll',auth, async (req, res) => {
  try {
    // console.log("[logout] running");
    // console.log("[logout] req token",req.token);
    // req.user.tokens.length = 0;
    req.user.tokens = [];
    // console.log("[logout] saving...");
    console.log("[logoutAll] user.tokens",req.user.tokens);
    await req.user.save();

    // console.log("[logout] sending...");
    res.send();

  } catch (e) {
    console.log("[logout] error",e);
    res.status(500).send();
  }
})

// router.get("/users/me", auth, async (req, res) => {
//   res.send(req.user);
//   // User.find({}).then((users) => {
//   //   res.send(users)
//   //
//   // }).catch((err) => {
//   //   res.status(500).send();
//   // })///catch
// });//get
//
// router.get("/user/:id", (req, res) => {
//
//   console.log("[user/:id req param]",req.params);
//
//   const _id = req.params.id;
//
//   // https://mongoosejs.com/docs/queries.html
//   User.findById(_id).then((user) => {
//   // User.find({}).then((users) => {
//     // res.send(users)
//     if(!user){
//       return res.status(404).send();
//     }
//
//     res.send(user);
//
//   }).catch((err) => {
//     res.status(500).send();
//   })///catch
// });//get
//
// router.patch("/user/:id", async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ["name","email","password","age"];
//   const isValidOperation = updates.every( entry => allowedUpdates.includes(entry) );
//
//   if (!isValidOperation) {
//     return res.status(400).send({error:"invalid updates"});
//   }
//
//   try {
//     // https://mongoosejs.com/docs/queries.html
//     // this performs a direct operation on the database & bypasses mongoose
//     // const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
//     const user = await User.findById(req.params.id);
//
//     // add each body object to the user objects values
//     updates.forEach( entry => user[entry] = req.body[entry] )
//
//     await user.save();
//
//     if (!user) {
//       return res.status(404).send();
//     }
//
//     res.send(user);
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });
//
// router.delete("/user/:id", async (req, res) => {
//   try {
//     // https://mongoosejs.com/docs/queries.html
//     const user = await User.findByIdAndDelete(req.params.id);
//
//     if (!user) {
//       res.status(404).send()
//     }
//     res.send(user);
//   } catch (e) {
//     res.status(500).send()
//   }
// })
//
//
//
// module.exports = router;
