import Footer from "../components/footer";
import NavigationBar from "../components/navigation";
import Hero from "../components/Hero";
import { useState } from "react";
import { useView } from "../hook/useView";
import LoansModal from "../components/LoansModal";
import { useParams } from "react-router-dom";

export default function LoansId() {
    const param = useParams()
    console.log(param)
    const [isOpen, setIsOpen] = useState(false);
    useView();
   
    function modalHandler() {
      setIsOpen((prev) => !prev);
    }
  return (
    <section className="">
      <NavigationBar />
      {isOpen && <LoansModal modalHandler={modalHandler} />}
      <div className="bg-[#FFF3E5] mt-[5rem]">
      <Hero
            address=""
            modalHandler={modalHandler}
            paragraph="At FineAce, we provide flexible loan solutions tailored to your needs. Whether it’s for unexpected expenses or a major purchase, our loans offer quick access to funds with clear terms and competitive rates, so you can borrow confidently and with ease."
            btnText="upload loan"  
            subText="Tailored for Your Needs."
            heroText="Flexible Loans,"
          />
        
      </div>
     
      <section className="flex flex-wrap  justify-center mt-20">
         
        </section>
      <Footer />
    </section>
  )
}
