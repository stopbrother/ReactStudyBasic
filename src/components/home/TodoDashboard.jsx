import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTodoQuery } from "../../hooks/useTodoQuery";
import { useGetFilter } from "../../hooks/useGetFilter";

const TodoDashboard = () => {
  const { filter } = useGetFilter();

  const { data: allTodos } = useTodoQuery();
  const { data: completedTodos } = useTodoQuery("completed");
  const { data: pendingTodos } = useTodoQuery("pending");

  return (
    <>
      <DashboardCard to={"/"} $active={!filter}>
        <p>All Task {allTodos?.length}</p>
      </DashboardCard>
      <DashboardCard to={"?view=pending"} $active={filter === "pending"}>
        <p>pending Task {pendingTodos?.length}</p>
      </DashboardCard>
      <DashboardCard to={"?view=completed"} $active={filter === "completed"}>
        <p>completed Task {completedTodos?.length}</p>
      </DashboardCard>
    </>
  );
};

export default TodoDashboard;

const DashboardCard = styled(Link)`
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
`;
