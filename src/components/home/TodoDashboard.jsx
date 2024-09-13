import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../api/TodoClient";

const TodoDashboard = () => {
  const [searchParams] = useSearchParams();
  const paramView = searchParams.get("view");
  const {
    data: todos,
    isPending,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isPending) {
    <div>로딩중</div>;
  }
  if (error) {
    <div>Error: {error.message}</div>;
  }

  return (
    <>
      <DashboardCard to={"/"} $active={!paramView}>
        <p>All Task {todos.length}</p>
      </DashboardCard>
      <DashboardCard to={"?view=pending"} $active={paramView === "pending"}>
        <p>pending Task {todos.length}</p>
      </DashboardCard>
      <DashboardCard to={"?view=completed"} $active={paramView === "completed"}>
        <p>completed Task {todos.length}</p>
      </DashboardCard>
    </>
  );
};

export default TodoDashboard;

const DashboardCard = styled(Link)`
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
`;
