import { ToDoModel } from "../models/TodoModel.js";

export const getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
};

export const saveToDo = async (req, res) => {  
    try {
        const todo = new ToDoModel(req.body);
        await todo.save();
        res.status(201).send({ todo, message: "todo Saved..." })
    }
    catch (error) {
        res.status(500).send(error);
    }  
};

export const updateToDo = async (req, res) => {
    const { id } = req.headers;

    try {
        await ToDoModel.findByIdAndUpdate({ _id: id }, req.body);
        res.status(201).send({ message: "ToDo Updated..." });
    }
    catch (error) {
        res.status(500).send(error);
    }   
};

export const deleteToDo = async (req, res) => {
    const { id } = req.headers;

    try {
        await ToDoModel.findByIdAndDelete({ _id: id });
        res.status(201).send({ message: "ToDo Deleted..." });
    }
    catch (error) {
        res.status(500).send(error);
    }   
};
