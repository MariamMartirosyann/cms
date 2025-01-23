import { Outlet } from "react-router-dom";
import Dashboard from "../Components/Dashboard";


const MainLayout = () => {
  return (
    <>
      <Dashboard/>
      <Outlet />
    </>
  );
};

export default MainLayout;
