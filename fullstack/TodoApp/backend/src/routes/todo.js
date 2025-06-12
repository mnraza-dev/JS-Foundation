import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo.js";

const todoRouter = express.Router();

todoRouter.post("/add", createTodo);
todoRouter.get("/get", getTodos);
todoRouter.delete("/delete/:id", deleteTodo);
todoRouter.put("/update/:id", updateTodo);

export default todoRouter;
