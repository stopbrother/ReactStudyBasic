import TodoContainer, { TodoContext } from "./components/TodoContainer";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <TodoContext.Provider>
        <TodoContainer />
      </TodoContext.Provider>
    </Layout>
  );
}

export default App;
