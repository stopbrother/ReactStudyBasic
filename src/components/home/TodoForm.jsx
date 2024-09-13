function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  console.log("addTodos", addTodos);

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
      <button>등록</button>
    </form>
  );
}

export default TodoForm;
