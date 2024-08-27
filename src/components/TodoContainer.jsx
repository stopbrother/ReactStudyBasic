import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoContainer() {
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
    <>
      <TodoForm addTodos={addTodos} />
      <TodoList
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        todos={todos}
      />
    </>
  );
}

export default TodoContainer;
