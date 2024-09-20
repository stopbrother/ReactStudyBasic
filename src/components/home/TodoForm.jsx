import { useState } from "react";
import { useCreateTodoMutaion } from "../../hooks/useTodoMutation";

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const { mutate } = useCreateTodoMutaion();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    const newTodoObj = {
      id: crypto.randomUUID(),
      text: newTodo,
      completed: false,
    };

    mutate(newTodoObj);
    setNewTodo("");
  };

  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodo} onChange={handleChangeInput} />
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
