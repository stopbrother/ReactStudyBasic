import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useEffect } from "react";
import Router from "./shared/Router";
import ThemeSwitchButton from "./components/ThemeSwitchButton";
import { useThemeStore } from "./store/useThemeStore";

const queryClient = new QueryClient();

const App = () => {
  const { darkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ThemeSwitchButton />
    </QueryClientProvider>
  );
};

export default App;
