const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  console.log("[auth middleware]");
  try {
    console.log("[auth] req headers",req.headers);// there is also a header onject

    const token = req.header('Authorization').replace("Bearer ","");
    const decoded = jwt.verify(token, 'thisiismynewcourse');//jwt returns a decoded payload
    const user = await User.findOne({  _id: decoded._id , 'tokens.token': token });
    // token.token: token - makes sure user is still current in the current token array
    // makes sure this token is still part of the tokens array

    if (!user) {
      throw new Error();
    }

    req.token = token;
    //pass the user to the route handler
    req.user = user;// seems like adding a property to the global req object
    next();

    console.log("[auth] token",token);
    // next();
  } catch (e) {
    console.log("[auth] error",e);
    res.status(401).send({error:"Please authenticate."})
  }
}//auth

module.exports = auth;
