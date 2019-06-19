// const express = require("express");
// const port = process.env.port || 3000;
// const app = express();
// 
// require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

//
// app.listen(port,() => {
//   console.log('[listen] Server up on port ', port);
// })
