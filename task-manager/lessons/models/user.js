const mongoose = require("mongoose");
const validator = require("validator");

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

module.exports = User;
