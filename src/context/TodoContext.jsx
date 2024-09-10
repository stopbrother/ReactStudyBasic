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

  const handleUpdate = (id) => {
    const updateTodos = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
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
