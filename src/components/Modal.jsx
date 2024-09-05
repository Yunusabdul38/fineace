import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useModal from "../hook/useModal";
import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { getSavedBudget, createBudget } from "../utils";

export default function Modal({ modalHandler }) {
  const ref = useRef()
  const [budget, setBudget] = useState();
  const [department, setDepartment] = useState();
  const [orgName, setOrgName] = useState();

  const handleBudget = async (e) => {
    e.preventDefault();
    if (!budget && !department && !orgName) {
      alert("invalid input");
      return;
    }
    try {
      const departmentArray = department.split(',').map(dept => dept.trim()).filter(dept => dept !== '');
      // const tx = await createBudget({orgName, budget, departmentArray});
      const tx= await getSavedBudget(0)
      console.log(tx)
    } catch (err) {
      console.log(err);
    }
  }
  useModal(modalHandler, ref)
  return (
    <>
      {createPortal(
        <div className="w-full h-full fixed bg-slate-400/40 z-30 top-0 flex justify-center items-center font-LexendDeca" ref={ref}>
          <form className="z-40 bg-slate-50 w-[90%] sm:w-1/2 mx-auto p-4 sm:p-6 capitalize grid gap-2 rounded-md transition-all duration-700 relative">
            <h1 className="capitalize text-center text-orangeText text-2xl">create budget</h1>
            <HiXMark className="absolute right-5 top-3 text-2xl hover:text-orangeText" onClick={() => modalHandler()} />
            <div>
              <label
                htmlFor="organization-name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                organization name
              </label>
              <input
                type="text"
                id="organization-name"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="fitech"
                onChange={(e) => setOrgName(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                departments <span className="text-orangeText text-[10px]">(comma separated)</span>
              </label>
              <input
                onChange={(e) => setDepartment(e.target.value)}
                type="text"
                id="department"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="web,ml,"
                required
              />
            </div>
            <div>
              <label
                htmlFor="budget-amount"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                total budget
              </label>
              <input
                onChange={(e) => setBudget(e.target.value)}
                type="number"
                id="budget-amount"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="500,000"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleBudget}
              className="flex gap-2 items-center mt-2 bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-3 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-full place-content-center"
            >
              Submit
            </button>
          </form>
        </div>,
        document.getElementById("budget")
      )}
    </>
  );
}

Modal.propTypes = {
  modalHandler: PropTypes.func
}