import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
});

const ToDoModel = mongoose.model('ToDo', todoSchema);

export { ToDoModel };