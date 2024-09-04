import { useState } from "react";
import Frame from "../assets/Frame (1).svg";
import Footer from "../components/footer";
import NavigationBar from "../components/navigation";
import TableRow from "../components/TableRow";
import { useView } from "../hook/useView";
import FundsModal from "../components/FundsModal";
import { useAccount } from "wagmi";
import AllocateFundsModal from "../components/AllocateFundsModal";
import Hero from "../components/Hero";

const dummy = [
  { department: "kasu medical department", budget: 400000, spend: 30000 },
  { department: "kasu math department", budget: 400000, spend: 20000 },
  { department: "kasu biology department", budget: 4400000, spend: 35000 },
  { department: "kasu chemistry department", budget: 1400000, spend: 130000 },
];
export default function Budget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAllocateOpen, setIsAllocateOpen] = useState(false);

  const { address } = useAccount();
  useView();
  const budgetTotal = dummy.reduce((initial, data) => initial + data.budget, 0);
  const spendstTotal = dummy.reduce((initial, data) => initial + data.spend, 0);
  function modalHandler() {
    setIsOpen((prev) => !prev);
  }
  function allocateFundsModalHandler() {
    setIsAllocateOpen((prev) => !prev);
  }
  return (
    <>
      {isOpen && <FundsModal modalHandler={modalHandler} />}
      {isAllocateOpen && (
        <AllocateFundsModal modalHandler={allocateFundsModalHandler} />
      )}
      <section className="">
        <NavigationBar />
        <div className="bg-[#FFF3E5] mt-[5rem]">
          <Hero
            address={address}
            modalHandler={modalHandler}
            paragraph="Investment management refers to the handling of financial assets
              and other investments—not only buying and selling them."
            btnText="request fund"  
            subText="Unlock Your Future"
            heroText="Master Your Money,"
          />
        </div>
        <h1 className="uppercase text-xl font-LexendDeca font-bold px-5 sm:px-10">
          total budget: <span className="text-orangeText">500,000</span>
        </h1>
        {!address && (
          <section className="mt-10 px-5 sm:px-10 mx-auto" role="table">
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
          </section>
        )}
        <Footer />
      </section>
    </>
  );
}
