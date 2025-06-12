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
    const id = req.params.id;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res
        .status(404)
        .json({ success: false, message: "Todo not found." });
    }
    res.status(200).json({
      success: true,
      message: "Successfully deleted the todo item.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const id = req.params.id;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      {
        title: title,
        description: description,
      },
      {
        new: true,
      }
    );
    return res.status(201).json({
      success: true,
      message: "Updated the todo item",
      data: { title, description },
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  }
};
