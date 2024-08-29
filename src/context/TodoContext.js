import { createContext, useState } from "react";

function TodoContext({ children }) {
  const TodoContext = createContext();

  const [todos, setTodos] = useState([]);
  const addTodos = (newTodoObj) => setTodos([...todos, newTodoObj]);

  const handleUpdate = (id) => {
    const updateTodos = todos.map((todo) => {
      if (id === todo.id) return { ...todo, completed: !todo.completed };
      else todo;
    });
    setTodos(updateTodos);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <TodoContext.Provider value={(addTodos, handleUpdate, handleDelete, todos)}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
