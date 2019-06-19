// const express = require("express");
// const port = process.env.port || 3000;
// const app = express();
//
// require("./db/mongoose");
//
// const userRouter = require("./routers/user");
// const taskRouter = require("./routers/task");
//
// // app.use((req, res, next) => {
// //   if (req.method == "GET") {
// //     res.send('GET requests are disabled');
// //   }else{
// //     next();
// //   }
// // });
//
// // app.use((req, res, next) => {
// //     res.status(503).send('Site is currently down, check back soon');
// // });
//
//
//
// app.use(express.json());
// app.use(userRouter);
// app.use(taskRouter);
//
//
// app.listen(port,() => {
//   console.log('[listen] Server up on port ', port);
// })


const jwt = require('jsonwebtoken');

const myFunction = async () => {
  const token = jwt.sign({ _id: 'abc123'}, 'thisiismynewcourse',{expiresIn:"7 days"});
  console.log("[jwt]",token);

  const data = jwt.verify(token, 'thisiismynewcourse');
  console.log("[jwt data]",data);
}

myFunction();
