import { useThemeStore } from "../store/useThemeStore";

const ThemeSwitchButton = () => {
  const { darkmode, toggleDarkMode } = useThemeStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 size-12 bg-white dark:bg-slate-900 dark:text-white rounded-full shadow-md flex items-center justify-center"
    >
      {darkmode ? "밝게" : "어둡게"}
    </button>
  );
};

export default ThemeSwitchButton;
