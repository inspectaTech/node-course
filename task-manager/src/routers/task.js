const express = require("express");
const router = new express.Router();

const Task = require("../models/task");

router.post("/tasks/:id",async (req, res) => {
  try {

    const task = new Task(req.body);

    await task.save()

    res.send(task);
  } catch (e) {
    res.status(404).send(e);
  }
})

router.get("/tasks",(req, res) => {
  Task.find({}).then((tasks) => {
    res.send(tasks)

  }).catch((err) => {
      res.status(500).send()
  })
});

router.get("/task/:id",(req, res) => {
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

router.patch("/task/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description","completed"];
  const isValidOperation = updates.every( entry => allowedUpdates.includes(entry) );

  if (!isValidOperation) {
    return res.status(400).send({error:"invalid updates"});
  }

  try {
    // https://mongoosejs.com/docs/queries.html
    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    const task = await Task.findById(req.params.id);
    updates.forEach( entry => task[entry] = req.body[entry] );

    await task.save();

    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/task/:id', async (req, res) => {
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

module.exports = router;
