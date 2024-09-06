import styled from "styled-components";
import TodoDashboard from "../components/home/TodoDashboard";
import TodoForm from "../components/home/TodoForm";
import TodoList from "../components/home/TodoList";

const Home = () => {
  return (
    <TodoContainer>
      <TodoDashboard />
      <TodoForm />
      <TodoList />
    </TodoContainer>
  );
};

export default Home;

const TodoContainer = styled.div``;
