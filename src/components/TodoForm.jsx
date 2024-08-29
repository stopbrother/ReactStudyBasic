import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm() {
  const { addTodos } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const newTodoObj = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    addTodos(newTodoObj);
    setNewTodo("");
  };

  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChangeInput} />
      <button onClick={handleSubmit}>등록</button>
    </form>
  );
}

export default TodoForm;
