import React, { useState } from "react";

// const todos = [
//   { id: 1, text: "Buy milk" },
//   { id: 2, text: "Clean the house" },
//   { id: 3, text: "Go for a run" },
//   { id: 4, text: "Finish homework" },
//   { id: 5, text: "Call mom" },
//   { id: 6, text: "Buy groceries" },
//   { id: 7, text: "Walk the dog" },
//   { id: 8, text: "Read a book" },
//   { id: 9, text: "Do laundry" },
//   { id: 10, text: "Write code" },
// ];
// const [todos, setTodos] = useState([]);
// const [newTodo, setNewTodo] = useState("");

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), text: newTodo, completed: false },
    ]);
    setNewTodo("");
  };
  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleUpdate = (id) => {
    const updateTodos = todos.map((todo) => {
      if (id === todo.id) return { ...todo, completed: !todo.completed };
      else todo;
    });
    setTodos(updateTodos);
    console.table(updateTodos);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTodo} onChange={handleChangeInput} />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleUpdate(todo.id)}>
              {/* {todo.completed} */}클릭
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
