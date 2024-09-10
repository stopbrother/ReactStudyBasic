import { createContext, useEffect, useState } from "react";
import { todoClient } from "../api/TodoClient";
import { useNavigate } from "react-router-dom";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const fetchTodos = async () => {
    const { data } = todoClient.get("/");
    setTodos(data);
  };

  const addTodos = async (newTodoObj) => {
    await todoClient.post("/", newTodoObj);

    fetchTodos();
  };

  const handleUpdate = async (id, completed) => {
    await todoClient.patch(`/${id}`, { completed });
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await todoClient.delete(`/${id}`);

    fetchTodos();
    navigate("/");
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <TodoContext.Provider
      value={{
        addTodos,
        fetchTodos,
        handleUpdate,
        handleDelete,
        todos,
        pendingTodos,
        completedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
