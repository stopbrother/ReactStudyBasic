import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Router from "./shared/Router";
import { useThemeStore } from "./store/useThemeStore";
import { useEffect } from "react";

const queryClient = new QueryClient();
function App() {
  const { darkmode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkmode);
  }, [darkmode]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
