import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// export const TodoContext = createContext();

function TodoContainer() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default TodoContainer;
