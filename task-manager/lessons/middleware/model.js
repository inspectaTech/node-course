// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");
//
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     lowercase: true,
//     validate(value){
//       if(!validator.isEmail(value)){
//         throw new Error("Email is invalid")
//       }
//     }
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     validate(value){
//       // let test_lwr = value.toLowerCase();
//       // if(test_lwr.includes("password")){
//       if(value.toLowerCase().includes("password")){
//         throw new Error("password cannot include 'password'")
//       }
//     }
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value){
//       if(value < 0){
//         throw new Error('Age must be a positive number')
//       }
//     }
//   }
// });

// userSchema.statics.findByCredentials = async (email, password) => {
//   try {
//     console.log("[findByCredentials] params",email);
//     console.log("[findByCredentials] params",password);
//     const user = await User.findOne({email});
//     if (!user) {
//       console.log("[findByCredentials] User not found");
//       throw new Error('Unable to login');
//     }//if
//
//     const isMatch = await bcrypt.compare(password, user.password);
//
//     if (!isMatch) {
//       // GOTCHA: failed - should be plain text passwords not hased passwords
//       console.log("[findByCredentials] password is not a match");
//       throw new Error('Unable to login');
//     }//if
//
//     return user;
//   } catch (e) {
//     console.log("[findByCredentials] error",e);
//   }
// 
// }//statics

userSchema.pre('save',async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  console.log("[userSchema] just before saving");

  next();// !important or the code hangs forever
})
//
// const User = mongoose.model('user', userSchema);
//
//
// module.exports = User;
