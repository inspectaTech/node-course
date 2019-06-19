const mongoose = require("mongoose");

// add database name to url - mongoose config different from MongoClient
// useCreateIndex - "makes sure when mongoose works with mongodb our indexes are created allowing us to
// quickly access the data we need to access"
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

// const User = mongoose.model('user', {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// });
//
// const me = new User({
//   name: "Andrew",
//   age: "Mike"
// });
//
// me.save().then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log("Error!",error);
// })

// mongoose will use the plural of the model name as the collection name
const Task = mongoose.model("Task",{
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
})

const entry = new Task({
  description: "make new task",
  completed: true
});

entry.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log("Error!",error);
})

// this is incomplete, there is no module.exports
