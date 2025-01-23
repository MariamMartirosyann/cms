import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import DropdownInput from "./DropDownInput";
import { useDispatch, useSelector } from "react-redux";
import { addDepartment } from "../redux/departmentSlice";
import Elipe from "../images/Ellipse 2.svg";
import Chekmark from "../images/Group.svg";
import { useNavigate } from "react-router";


const AddEditDepartment = () => {
  const [name, setName] = useState("");
  const [branches, setBranches] = useState("");
  const [descrption, setDescrption] = useState("");
  const [selectedHead, setSelectedHead] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const [nameError, setNameError] = useState(false);
  const [branchesError, setBranchesError] = useState(false);
  const [statusError, setStatusError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const dispatch = useDispatch();
  const navigate= useNavigate()
  const departmentsFromStore = useSelector((store) => store?.department);


  const handleCancel = () => {
  navigate("/dashboard/depatrments")
  };

  const handleCreateValidation = () => {
    if (!name) {
      setNameError(true);
    }
    if (!branches) {
      setBranchesError(true);
    }
    if (!selectedStatus) {
      setStatusError(true);
    }
    if (descrption.length > 100) {
      setDescriptionError(true);
    }
  };

  const handleCreate = () => {
    handleCreateValidation();
    dispatch(
      addDepartment({
        name,
        branches,
        descrption,
        selectedHead,
        selectedStatus,
      })
    );
    setShowCongrats(true);
  };

  const handleGoToDepartment = () => {
    navigate("/dashboard/depatrments")
  };
 
  return (
    <>
      {!showCongrats ? (
        <div className=" fixed right-0 mt-8 w-[80%] h-[100%] flex flex-col  justify-center align-middle px-auto ">
          <div className="mx-auto w-[40%] shadow-lg p-10 justify-center">
            <h4 className=" text-[20px]/[27,28px] font-bold mx-auto">
              {" "}
              Create Department
            </h4>
            <InputField
              label="Department name *"
              value={name}
              id="department"
              name="department"
              placeholder="Enter Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              error={nameError ? "Please enter name" : null}
            />

            <InputField
              label="Descrption "
              value={descrption}
              onChange={(e) => setDescrption(e.target.value)}
              id="descrption"
              name="descrption"
              placeholder="Describe department "
              labelIcon={true}
              error={descriptionError ? " 0-100 characters" : null}
            />
            {!descriptionError ? (
              <div className=" flex justify-end">
                <p className="text-[8px] text-myColorsGrey-100 ">
                  0-100 characters
                </p>
              </div>
            ) : null}

            <DropdownInput
              label="Department Head"
              id="departmentHead"
              name="Department Head"
              options={["Hakob Hokobyan", "Sahak Sahakyan", "Manuk Manukyan"]}
              placeholder="Assign department head"
              value={selectedHead}
              labelIcon={true}
              onChange={(value) => setSelectedHead(value)}
            />

            <InputField
              label="Branches *"
              value={branches}
              onChange={(e) => setBranches(e.target.value)}
              id="branches"
              name="branches"
              placeholder="Enter branches number"
              error={branchesError ? "Please enter number" : null}
            />
            <DropdownInput
              label="Staus *"
              id="status"
              name="Status"
              options={["Active", "Pending", "Disabled"]}
              placeholder="Choose status"
              value={selectedStatus}
              labelIcon={false}
              onChange={(value) => setSelectedStatus(value)}
              error={statusError ? "Please select status" : null}
            />
            <div className="flex flex-row mt-8 justify-between">
              <button
                onClick={handleCancel}
                className=" border-[1px] border-myColorsGrey-100 text-myColorsGrey-100 bg-white w-[46%] h-[44px] mx-auto p-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className=" bg-lightBlue text-white w-[46%] h-[44px] mx-auto p-2 rounded-md"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className=" fixed right-0 mt-8  w-[80%] h-[100%] border-myColorsGrey-100 bg-white shadow-lg mx-auto align-middle justify-center p-10">
          <div className=" ml-16 flex relative justify-center">
            <img src={Elipe} alt="elipe" />
            <img
              className=" absolute  left-37 bottom-8 justify-center"
              src={Chekmark}
              alt="chekmark"
            />
          </div>
          <h1 className="text-[32px]/[43,65]  font-bold mx-auto mt-10 text-center">
            Your {departmentsFromStore?" "+departmentsFromStore[0].name:null}
          </h1>
          <h1 className="text-[32px]/[43,65]  font-bold mx-auto  mb-5 text-center">
            department was created!
          </h1>
          <p className=" font-normal text-[14px]/[19,1px] text-myColorsGrey-100 text-center">
            You successfully cretaed new department.
          </p>
          <p className=" font-normal text-[14px]/[19,1px] text-myColorsGrey-100 text-center">
            Now you can add members and work efficiently!
          </p>
          <button
            className="flex ml-[40%] text-[16px]/[21,82px] p-4  my-5 rounded-lg bg-myColors-100 text-white w-[248px] justify-center"
            onClick={handleGoToDepartment}
          >
            Ok, thanks
          </button>
        </div>
      )}
    </>
  );
};

export default AddEditDepartment;
