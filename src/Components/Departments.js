import React, { useState, useEffect } from "react";
import Empty from "../images/Not Found illustration.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BasicTable from "./Table/BasicTable";
import { columns } from "./Table/columns";

const Departments = () => {

  const [activeDepartment, setActiveDepartment] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const departmentsFromStore = useSelector((store) => store?.department);

  const handleAdd = () => {
    navigate("/dashboard/addEdit-depatrments");

  }

  return (
    <>
      {departmentsFromStore.length?(
        
          
          <div className=" fixed right-0 mt-20 w-[80%] h-[100%] flex flex-col   px-auto ">
         <p>{departmentsFromStore[0].name}</p>
          </div>
      
      ) : (
        <div className=" fixed right-0 mt-8 w-[80%] h-[100%] flex flex-col  justify-center align-middle px-auto ">
          <img
            src={Empty}
            width="172px"
            height="177.93px"
            alt="empty"
            className="mx-auto"
          />
          <h4 className="text-[22px]/[30.01px]  font-bold text-center my-5">
            There are no departments{" "}
          </h4>
          <p className=" font-normal text-[16px]/[21.82px] text-myColorsGrey-700 text-center mb-5">
            You haven’t created any departments to your system yet.
          </p>
          <button
            onClick={handleAdd}
            className=" bg-lightBlue text-white w-[173px] h-[44px] mx-auto p-2 rounded-md"
          >
            Create Department
          </button>
        </div>
      )}
    </>
  );
};

export default Departments;
