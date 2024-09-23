import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main className="dark:bg-black">
      <Outlet />
    </main>
  );
}

export default Layout;
