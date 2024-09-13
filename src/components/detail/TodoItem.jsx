function TodoItem({ todo }) {
  return (
    <li key={todo.id}>
      {todo.text}
      <button onClick={() => handleUpdate(todo.id)}>
        {todo.completed ? <span> 취소 </span> : <span> 확인 </span>}
      </button>
      <button onClick={() => handleDelete(todo.id)}>삭제</button>
    </li>
  );
}

export default TodoItem;
