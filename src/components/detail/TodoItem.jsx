import { useNavigate } from "react-router-dom";
import {
  useDeleteTodoMutation,
  useToggleTodoMutation,
} from "../../hooks/useTodoMutation";

function TodoItem({ todo }) {
  const navigate = useNavigate();

  const { mutateAsync: handleDelete, isPending } = useDeleteTodoMutation();
  const { mutate: handleToggle } = useToggleTodoMutation();

  return (
    <li key={todo.id}>
      {todo.text}
      <button
        onClick={() =>
          handleToggle({ id: todo.id, completed: !todo.completed })
        }
      >
        {todo.completed ? <span> 취소 </span> : <span> 확인 </span>}
      </button>
      <button
        onClick={async () => {
          await handleDelete(todo.id);
          navigate("/");
        }}
      >
        {isPending ? "삭제 중" : "삭제"}
      </button>
    </li>
  );
}

export default TodoItem;
