import styled from "styled-components";
import { Link, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../api/TodoClient";

const TodoDashboard = () => {
  const [searchParams] = useSearchParams();
  const paramView = searchParams.get("view");

  const { data: allTodos } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
  const { data: completedTodos } = useQuery({
    queryKey: ["todos", "completed"],
    queryFn: () => getTodos("completed"),
  });
  const { data: pendingTodos } = useQuery({
    queryKey: ["todos", "pending"],
    queryFn: () => getTodos("pending"),
  });

  return (
    <>
      <DashboardCard to={"/"} $active={!paramView}>
        <p>All Task {allTodos?.length}</p>
      </DashboardCard>
      <DashboardCard to={"?view=pending"} $active={paramView === "pending"}>
        <p>pending Task {pendingTodos?.length}</p>
      </DashboardCard>
      <DashboardCard to={"?view=completed"} $active={paramView === "completed"}>
        <p>completed Task {completedTodos?.length}</p>
      </DashboardCard>
    </>
  );
};

export default TodoDashboard;

const DashboardCard = styled(Link)`
  text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
`;
