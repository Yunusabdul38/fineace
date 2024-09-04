import { useState } from "react";
import Frame from "../assets/Frame (1).svg";
import Footer from "../components/footer";
import NavigationBar from "../components/navigation";
import TableRow from "../components/TableRow";
import { useView } from "../hook/useView";
import FundsModal from "../components/FundsModal";
import {useAccount} from 'wagmi';
import AllocateFundsModal from "../components/AllocateFundsModal";

const dummy = [
  { department: "kasu medical department", budget: 400000, spend: 30000 },
  { department: "kasu math department", budget: 400000, spend: 20000 },
  { department: "kasu biology department", budget: 4400000, spend: 35000 },
  { department: "kasu chemistry department", budget: 1400000, spend: 130000 },
];
export default function Budget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAllocateOpen, setIsAllocateOpen] = useState(false)
  
  const {address} = useAccount();
  useView();
  const budgetTotal = dummy.reduce((initial,data)=> initial+data.budget,0)
  const spendstTotal = dummy.reduce((initial,data)=> initial+data.spend,0)
  function modalHandler(){
    setIsOpen(prev=>!prev)
  }
  function allocateFundsModalHandler(){
    setIsAllocateOpen(prev=>!prev)
  }
  return (
   <>
   {isOpen && <FundsModal modalHandler={modalHandler}/>}
   {isAllocateOpen && <AllocateFundsModal modalHandler={allocateFundsModalHandler}/>}
    <section className="">
      <NavigationBar />
      <div className="bg-[#FFF3E5] mt-[5rem]">
        <header className="flex flex-col-reverse justify-between items-center w-full py-10 md:flex-row-reverse my-20 md:w-11/12">
          <img
            src={Frame}
            alt="frame avater"
            className="w-full sm:w-3/5 md:w-1/2 lg:w-2/5"
          />
          <div className="px-5 sm:pl-10 font-Urbanist w-full md:w-1/2 gap-5 grid ">
            <h1 className="text-[#1A1A1A] font-semibold sm:text-3xl text-4xl md:text-5xl lg:text-5xl uppercase">
            Master Your Money,<br /> Unlock Your Future.
            </h1>
            <p className="text-[#808080]">
              Investment management refers to the handling of financial assets
              and other investments—not only buying and selling them.
            </p>
            {!address && (
              <button className="bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-fit" onClick={modalHandler}>
                request fund
              </button>
            )}
          </div>
        </header>
      </div>
      <h1 className="uppercase text-xl font-LexendDeca font-bold px-5 sm:px-10">total budget: <span className="text-orangeText">500,000</span></h1>
      {!address && <section className="mt-10 px-5 sm:px-10 mx-auto" role="table">
        <TableRow
          sn="S/N"
          budget="budget"
          department="department"
          spend="spend"
        />
        {dummy.map((data, index) => (
          <TableRow
            key={index}
            sn={++index}
            budget={data.budget}
            department={data.department}
            spend={data.spend}
            request={true}
            handler={allocateFundsModalHandler}
          />
        ))}
         <TableRow
            sn="total"
            budget={budgetTotal}
            department=""
            spend={spendstTotal}
          />
      </section>}
      <Footer />
    </section>
   </>
  );
}
