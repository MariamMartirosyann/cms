import { Navigate } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

import Dashboard from "../Components/Dashboard";
import Departments from './../Components/Departments';
import UserManagement from "../Components/UserManagement";
import Projects from "../Components/Projects";
import Teams from "../Components/Teams";
import PM from "../Components/PM"
import Settings from "../Components/Settings";
import Archive from './../Components/Archive';
import AddEditDepartment from "../Components/AddEditDepartment";

const MainRoutes = [
  {
    path: "/dashboard",
    element: <MainLayout />,
    children: [ 
      {
        path: "/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/dashboard/depatrments",
        element: <Departments/>,
      },
      {
        path: "/dashboard/addEdit-depatrments",
        element: <AddEditDepartment/>,
      },
      {
        path: "/dashboard/user-management",
        element: <UserManagement/>,
      },
      {
        path: "/dashboard/projects",
        element: <Projects/>,
      },
      {
        path: "/dashboard/teams",
        element: <Teams/>,
      },
      {
        path: "/dashboard/project-management",
        element: <PM/>,
      },
      {
        path: "/dashboard/settings",
        element: <Settings/>,
      },
      {
        path: "/dashboard/archive",
        element: <Archive/>,
      },
    ],
  },
];

export default MainRoutes;