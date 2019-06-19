const mongoose = require("mongoose");
const validator = require("validator");
const taskSchema = mongoose.Schema({
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

taskSchema.pre("save", async function (next) {
  const task = this;
  console.log('[taskSchema] before saving');
  next();
})
// mongoose will use the plural of the model name as the collection name
const Task = mongoose.model("Task",taskSchema);

module.exports = Task;
