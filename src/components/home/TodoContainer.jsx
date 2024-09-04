import { Link } from "react-router-dom";
import TodoForm from "./TodoForm";

function TodoContainer() {
  return (
    <>
      안녕하세요.
      <TodoForm />
      <Link to={"/detail"}>디테일페이지</Link>
    </>
  );
}

export default TodoContainer;
