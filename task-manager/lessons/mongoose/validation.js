const mongoose = require("mongoose");
const validator = require("validator");

// add database name to url
// useCreateIndex - "makes sure when mongoose works with mongodb our indexes are created allowing us to
// quickly access the data we need to access"
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})

const User = mongoose.model('user', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Email is invalid")
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value){
      // let test_lwr = value.toLowerCase();
      // if(test_lwr.includes("password")){
      if(value.toLowerCase().includes("password")){
        throw new Error("password cannot include 'password'")
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value){
      if(value < 0){
        throw new Error('Age must be a positive number')
      }
    }
  }
});

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

// mongoose will use the plural of the model name as the collection name
const Task = mongoose.model("Task",{
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const entry = new Task({
  description: "    some other task      "
});

// const entry = new Task({
//   description: "make new task",
//   completed: true
// });

entry.save().then((result) => {
  console.log(result);
}).catch((error) => {
  console.log("Error!",error);
})
