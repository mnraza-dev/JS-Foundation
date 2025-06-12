import express from "express";
import { createTodo, deleteTodo, getTodos } from "../controllers/todo.js";

const todoRouter = express.Router();

todoRouter.post("/add", createTodo);
todoRouter.get("/get", getTodos);
todoRouter.delete("/delete/:id", deleteTodo);

export default todoRouter;
