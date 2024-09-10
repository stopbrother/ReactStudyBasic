import { useContext } from "react";
import TodoItem from "../detail/TodoItem";
import { TodoContext } from "../../context/TodoContext";
import { useSearchParams } from "react-router-dom";

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

function TodoList() {
  const { todos, pendingTodos, completedTodos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();
  const paramView = searchParams.get("view");

  const getFilteredTodos = () => {
    if (paramView === "pending") {
      return pendingTodos;
    } else if (paramView === "completed") {
      return completedTodos;
    }
    return todos;
  };
  const filteredTodos = getFilteredTodos();

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
