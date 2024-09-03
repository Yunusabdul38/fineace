import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useModal from "../hook/useModal";
import { useRef } from "react";

export default function Modal({modalHandler}) {
  const ref = useRef()
  useModal(modalHandler,ref)
  return (
    <>
      {createPortal(
        <div className="w-full h-full fixed bg-slate-400/40 z-30 top-0 flex justify-center items-center font-LexendDeca" ref={ref}>
          <form className="z-40 bg-slate-50 w-[90%] sm:w-1/2 mx-auto p-4 sm:p-6 capitalize grid gap-2 rounded-md transition-all duration-700 relative">
            <HiXMark className="absolute right-5 top-3 text-2xl hover:text-orangeText" onClick={()=>modalHandler()}/>          
            <div>
              <label
                htmlFor="organization name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                organization name
              </label>
              <input
                type="text"
                id="first_name"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="fitech"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Flowbite"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900"
              >
                I agree with the{" "}
                <span className="text-orangeText">terms and conditions</span>.
              </label>
            </div>
            <button
              type="submit"
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
