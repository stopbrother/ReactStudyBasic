import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

const TodoDashboard = () => {
  const { todos, pendingTodos, completedTodos } = useContext(TodoContext);
  return (
    <>
      <div>
        <p>All Task {todos.length}</p>
      </div>
      <div>
        <p>pending Task {pendingTodos.length}</p>
      </div>
      <div>
        <p>completed Task {completedTodos.length}</p>
      </div>
    </>
  );
};

export default TodoDashboard;
