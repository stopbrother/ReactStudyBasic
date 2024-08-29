import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoItem({ todo }) {
  const { handleUpdate, handleDelete } = useContext(TodoContext);
  return (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => handleUpdate(todo.id)}>
        {todo.completed ? <span> 완료 </span> : <span> 취소 </span>}
      </button>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
