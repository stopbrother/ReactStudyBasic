import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";

const TodoDashboard = () => {
  const { todos, pendingTodos, completedTodos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();
  const paramView = searchParams.get("view");

  return (
    <>
      <DashboardCard to={"/"} $active={!paramView}>
        <p>All Task {todos.length}</p>
      </DashboardCard>
      <DashboardCard to={"?view=pending"} $active={paramView === "pending"}>
        <p>pending Task {pendingTodos.length}</p>
      </DashboardCard>
      <DashboardCard to={"?view=completed"} $active={paramView === "completed"}>
        <p>completed Task {completedTodos.length}</p>
      </DashboardCard>
    </>
  );
};

export default TodoDashboard;

const DashboardCard = styled(Link)`
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
`;
