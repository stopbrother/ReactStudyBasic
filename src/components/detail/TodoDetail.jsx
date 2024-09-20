import { useTodoFilteredQuery } from "../../hooks/useTodoQuery";

const TodoDetail = ({ id }) => {
  const { data: todo, isPending, error } = useTodoFilteredQuery(id);

  if (isPending) return <div>로딩중..</div>;
  if (error) return <p>error: {error.message}</p>;

  return <div>{todo.text}</div>;
};

export default TodoDetail;
