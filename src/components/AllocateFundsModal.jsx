import { useRef } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import useModal from "../hook/useModal";
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';

export default function AllocateFundsModal({modalHandler}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

    const ref = useRef()
    useModal(modalHandler,ref)
    const onSubmit = (data)=>{
      console.log(data)
    }
  return (
    <>
      {createPortal(
        <div className="w-full h-full fixed bg-slate-400/40 z-30 top-0 flex justify-center items-center font-LexendDeca"  ref={ref}>
          <form className="z-40 bg-slate-50 w-[90%] sm:w-1/2 mx-auto p-4 sm:p-6 capitalize grid gap-2 rounded-md transition-all duration-700 relative" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="capitalize text-center text-orangeText text-2xl">allocate funds</h1>
            <HiXMark className="absolute right-5 top-3 text-2xl hover:text-orangeText" onClick={()=>modalHandler()}/>          
            <div>
              <label
                htmlFor="department-wallet-address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                department wallet address
              </label>
              <input
                type="text"
                id="reason"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="dept wallet address"
                required
                {...register("department-wallet-address")}
              />
            </div>    
            <div>
              <label
                htmlFor="amount"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                amount
              </label>
              <input
                type="text"
                id="amount"
                className="focus:border-orangeText outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="amount"
                required
                {...register("amount")}
              />
            </div>
            
            <button
              type="submit"
              className="flex gap-2 items-center mt-2 bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-3 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-full place-content-center"
            >
              Submit
            </button>
          </form>
        </div>,
        document.getElementById("funds")
      )}
    </>
  );
}

AllocateFundsModal.propTypes={
  modalHandler:PropTypes.func
}