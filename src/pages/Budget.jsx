import { useState } from "react";
import { useView } from "../hook/useView";
import FundsModal from "../components/FundsModal";
import { useAccount } from "wagmi";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Budget() {
  const [isOpen, setIsOpen] = useState(false);

  const { address } = useAccount();
  useView();
  function modalHandler() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      {isOpen && <FundsModal modalHandler={modalHandler} />}
      <section className="">
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
        <div className="mt-20 px-10">
      <h1 className="text-orangeText/70 font-semibold text-2xl text-center sm:text-start sm:ml-28 uppercase ">available budgets</h1>
        <section className="flex flex-wrap  justify-center">
        <Card departments="5 departments"  name="kaduna state university" type="budget" />
        <Card departments="5 departments"  name="kaduna state university" type="budget" />
        <Card departments="5 departments"  name="kaduna state university" type="budget" />
        <Card departments="5 departments"  name="kaduna state university" type="budget" />
        <Card departments="5 departments"  name="kaduna state university" type="budget" />
        <Card departments="5 departments"  name="kaduna state university" type="budget" />
        </section>
      </div>
      </section>
    </>
  );
}
