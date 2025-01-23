import React from "react";
import Notifs from "../images/notification.svg";
import User from "../images/profile.png";
import Search from "../images/Search.svg";
import Logo from "../images/logo.png";
import DashboardIcon from "../images/ri_dashboard-line.svg";
import UserManagementIcon from "../images/ph_users-bold.svg";
import ProjectsIcon from "../images/briefcase 1.svg";
import DepartmentIcon from "../images/Union.svg";
import PMIcon from "../images/workflow (1) 1.svg";
import SettingICon from "../images/ci_settings.svg";
import ArchiveIcon from "../images/jam_archive.svg";
import TeamIcon from "../images/group 1.svg";
import { Link } from "react-router";
import { useLocation } from "react-router";

const sideBarLinks = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
    dropDown: false,
  },
  {
    id: 2,
    name: "User Management",
    link: "/dashboard/user-management",
    icon: UserManagementIcon,
    dropDown: false,
  },
  {
    id: 3,
    name: "Departments",
    link: "/dashboard/depatrments",
    icon: DepartmentIcon,
    dropDown: false,
  },
  {
    id: 4,
    name: "Projects",
    link: "/dashboard/projects",
    icon: ProjectsIcon,
    dropDown: true,
  },
  {
    id: 5,
    name: "Teams",
    link: "/dashboard/teams",
    icon: TeamIcon,
    dropDown: false,
  },
  {
    id: 6,
    name: "Project Management",
    link: "/dashboard/project-management",
    icon: PMIcon,
    dropDown: true,
  },
  {
    id: 7,
    name: "Settings",
    link: "/dashboard/settings",
    icon: SettingICon,
    dropDown: false,
  },
  {
    id: 8,
    name: "Archive",
    link: "/dashboard/archive",
    icon: ArchiveIcon,
    dropDown: true,
  },
];

const Dashboard = () => {
  const location = useLocation();
  
  return (
    <div className="flex felx col">
      <div className="w-[100%] flex flex-row fixed top-0 h-[70px] justify-end px-1 shadow-md">
        <div className="w-[275px]">
          {" "}
          <div className=" my-2 px-2 py-1  border border-lightGrey w-[273px]  flex justify-between rounded-md">
            <p className="text-lightGrey">Search ...</p>
            <img
              src={Search}
              alt="Search"
              className=" border border-lightGrey p-1 rounded-md"
            />
          </div>{" "}
        </div>
        <div className="  my-2 mx-2">
          {" "}
          <img src={Notifs} alt="Notifs" />
        </div>
        <div className="mb-2 mx-6">
          {" "}
          <img src={User} />
        </div>
      </div>
      <div>
        <div className="fixed left-0 w-[261px] bg-durkBlue h-[100%] flex flex-col p-7 ">
          <div className="mb-10">
            <img src={Logo} alt="Logo" />
          </div>
         

          {sideBarLinks.map((l) => (
            <Link
              to={l.link}
              key={l.id}
              className={location.pathname===l.link?"flex flex-row text-orangeHover  bg-white  py-2 my-3":"flex flex-row text-lightGrey  my-3"}
            >
              <div className="mx-2 ">
                {" "}
                <img src={l.icon} className={location.pathname===l.link&&"bg-orangeHover opacity-7 p-1"} />
              </div>
              <div>{l.name}</div>
            </Link>
          ))}
        </div>
  
      </div>
      
    </div>
  );
};

export default Dashboard;
