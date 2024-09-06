import { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const addTodos = (newTodoObj) => setTodos([...todos, newTodoObj]);

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
  };

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
