import { TodoProvider } from "./context/TodoContext";
import Router from "./shared/Router";

function App() {
  return (
    <TodoProvider>
      <Router />
    </TodoProvider>
  );
}

export default App;
