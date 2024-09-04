import Footer from "../components/footer";
import NavigationBar from "../components/navigation";
import Hero from "../components/Hero";
import { useState } from "react";
import { useView } from "../hook/useView";
import { useParams } from "react-router-dom";
import RequestLoanModal from "../components/RequestLoanModal";

export default function LoansId() {
    const {id} = useParams()
    const title = id.replace("-"," ")
    useView();
    const [isOpen, setIsOpen] = useState(false);    
    useView();
    function modalHandler() {
      setIsOpen((prev) => !prev);
    }
  return (
    <section className="">
      <NavigationBar />
      {isOpen && <RequestLoanModal modalHandler={modalHandler} />}
      <div className="bg-[#FFF3E5] mt-[5rem]">
      <Hero
            address=""
            modalHandler={modalHandler}
            paragraph="At FineAce, we provide flexible loan solutions tailored to your needs. Whether it’s for unexpected expenses or a major purchase, our loans offer quick access to funds with clear terms and competitive rates, so you can borrow confidently and with ease."
            btnText="upload loan"  
            subText=""
            heroText={title}
          />        
      </div>
      <Footer />
    </section>
  )
}
