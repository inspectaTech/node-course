const mongoose = require("mongoose");

// add database name to url
// useCreateIndex - "makes sure when mongoose works with mongodb our indexes are created allowing us to
// quickly access the data we need to access"

  mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
  }).catch((error) => {
    console.log('[mongoose connect]',error);
  })

  console.log('[mongoose connected]');


// const me = new User({
//   name: "   Felicia   ",
//   email: "fela@MEAD.IO",
//   password:"somethingElse"
// });
//
// me.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log("Error!",error);
// })



// const entry = new Task({
//   description: "    some other task      "
// });
//
// // const entry = new Task({
// //   description: "make new task",
// //   completed: true
// // });
//
// entry.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log("Error!",error);
// })
