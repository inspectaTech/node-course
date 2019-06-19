const express = require("express");
const port = process.env.port || 3000;
const app = express();

require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// app.use((req, res, next) => {
//   if (req.method == "GET") {
//     res.send('GET requests are disabled');
//   }else{
//     next();
//   }
// });

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down, check back soon');
// });



app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port,() => {
  console.log('[listen] Server up on port ', port);
})

const pet = {
  name: 'Hal'
}

pet.toJSON = function(){
  // console.log(this)
  // return this
  return {}
}

console.log(JSON.stringify(pet));
