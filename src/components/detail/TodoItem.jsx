import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo, toggleTodo } from "../../api/TodoClient";
import { useNavigate } from "react-router-dom";

function TodoItem({ todo }) {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync: handleDelete, isPending } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const { mutate: handleToggle } = useMutation({
    mutationFn: ({ id, completed }) => toggleTodo(id, completed),
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

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
