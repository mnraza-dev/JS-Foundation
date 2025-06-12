import Todo from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description });
    res.status(201).json({ message: "Todo created successfully", todo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).json({
      success: true,
      message: "Fetched all todos data",
      data: allTodos,
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params._id;

    await Todo.findOneAndDelete(id);
    res.status(200).json({
      success: true,
      mesaage: "successful deleted a todo item.",
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};
