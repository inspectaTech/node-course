const express = require("express");
const port = process.env.port || 3000;
const app = express();

require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");

app.use(express.json());

app.post('/user/', (req,res) => {
  // console.log("[user body]",req.body);
  try{

    const user = new User(req.body);
    user.save().then(() => {
      res.send(user);
    }).catch((err) => {
      console.log("[user error] an error has occured",err);
      res.status(404).send({error:"an error has occured"})
    })
  }catch(error){
    console.log(error);
  }
})//post

app.get("/users", (req, res) => {

  User.find({}).then((users) => {
    res.send(users)

  }).catch((err) => {
    res.status(500).send();
  })///catch
});//get

app.get("/user/:id", (req, res) => {

  console.log("[user/:id req param]",req.params);

  const _id = req.params.id;

  // https://mongoosejs.com/docs/queries.html
  User.findById(_id).then((user) => {
  // User.find({}).then((users) => {
    // res.send(users)
    if(!user){
      return res.status(404).send();
    }

    res.send(user);

  }).catch((err) => {
    res.status(500).send();
  })///catch
});//get

app.patch("/user/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["name","email","password","age"];
  const isValidOperation = updates.every( entry => allowedUpdates.includes(entry) );

  if (!isValidOperation) {
    return res.status(400).send({error:"invalid updates"});
  }

  try {
    // https://mongoosejs.com/docs/queries.html
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    if (!user) {
      return res.status(404).send();
    }

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    // https://mongoosejs.com/docs/queries.html
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).send()
    }
    res.send(user);
  } catch (e) {
    res.status(500).send()
  }
})



app.get("/tasks",(req, res) => {
  Task.find({}).then((tasks) => {
    res.send(tasks)

  }).catch((err) => {
      res.status(500).send()
  })
});

app.get("/task/:id",(req, res) => {
   console.log("[task req params]",req.params);

   // https://mongoosejs.com/docs/queries.html
   Task.findById(req.params.id).then((task) => {
     if(!task){
       console.log("[task] no task was found with that id",err);
       res.status(404).send()
     }

     res.send(task);
   }).catch((err) => {
     console.log("[task id error]",err);
     res.status(500).send();
   })
})

app.patch("/task/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description","completed"];
  const isValidOperation = updates.every( entry => allowedUpdates.includes(entry) );

  if (!isValidOperation) {
    return res.status(400).send({error:"invalid updates"});
  }

  try {
    // https://mongoosejs.com/docs/queries.html
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.delete('/task/:id', async (req, res) => {
  try {
    console.log("[task delete]",req.params.id);

    // GOTCHA: will fail without await!!
    // https://mongoosejs.com/docs/queries.html
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      res.status(404).send();
    }
    res.send(task);
  } catch (e) {
    res.status(400).send();
  }
})

app.listen(port,() => {
  console.log('[listen] Server up on port ', port);
})
