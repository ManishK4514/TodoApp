import { Router } from "express";
import { getToDo, saveToDo, updateToDo, deleteToDo } from "../controllers/TodoControllers.js"

const todorouter = Router();

todorouter.get('/', getToDo);
todorouter.post('/save', saveToDo);
todorouter.patch('/update', updateToDo);
todorouter.delete('/delete', deleteToDo);

export { todorouter };