export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = ({ id = 0, title = "", completed = false }) => {
  return {
    type: ADD_TODO,
    payload: { id, title, completed },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
export const updateTodo = ({ id, title, completed }) => {
  return {
    type: UPDATE_TODO,
    payload: { id, title, completed },
  };
};
