import Hero from "../components/Hero";
import { useState } from "react";
import { useView } from "../hook/useView";
import LoansModal from "../components/LoansModal";
import Card from "../components/Card";

export default function Loans() {
  const [isOpen, setIsOpen] = useState(false);
  useView();

  function modalHandler() {
    setIsOpen((prev) => !prev);
  }
  return (
    <section className="">
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
      
      <section className="md:max-w-5xl md:px-20 px-5 mx-auto grid gap-5">
      <h1 className="uppercase text-xl font-LexendDeca font-bold text-orangeText">
        About Our Loaning Services
      </h1>
        <p>
          Our loaning services are designed to empower individuals, small
          businesses, and farmers by providing accessible microloans and grants.
          We understand that traditional banking systems often excludes those
          who need financial support the most due to high barriers, complex
          requirements, and lengthy processes. That’s why our platform offers an
          innovative, blockchain-based solution that connects borrowers directly
          with a diverse pool of funders, including local governments, NGOs,
          private investors, and community members.
        </p>
        <h1 className="uppercase text-xl font-LexendDeca font-bold text-orangeText">
          What We Offer
        </h1>
        <p>
          Microloans: Small, short-term loans that help individuals and
          businesses kickstart their projects, purchase equipment, or expand
          their operations. Our microloans come with low-interest rates and
          flexible repayment terms, making them an affordable option for those
          who need a financial boost.
        </p>
        <p>
          Grants: For those who need funding without the burden of repayment,
          our grants provide direct financial support to deserving projects,
          such as community initiatives, educational programs, and agricultural
          improvements.
        </p>
        <p>
          Accessible Application Process: With just a smartphone and internet
          access, borrowers can easily apply for funding through our
          user-friendly platform. Our streamlined process means no excessive
          paperwork, long waiting periods, or hidden fees—just quick access to
          the funds you need.
        </p>
        <p>
          Transparent and Secure: Every transaction on our platform is recorded
          on the blockchain, ensuring complete transparency and security. This
          means that both borrowers and funders can trust that funds are managed
          responsibly, with every penny accounted for.
        </p>
        <p>
          Community-Driven Impact: By pooling funds from various sources, our
          platform enables everyone to contribute to local economic growth.
          Whether you’re borrowing to start a new venture or investing to
          support your community, our loaning services create a positive impact
          for all involved.
        </p>
        <p>
          Our mission is to break down financial barriers and create
          opportunities for those often overlooked by traditional finance. With
          our innovative loaning services, we aim to build stronger, more
          resilient communities—one loan, one grant, and one success story at a
          time
        </p>
      </section>
      <div className="mt-20">
      <h1 className="text-orangeText/70 font-semibold text-2xl text-center sm:text-start sm:ml-28 uppercase ">available loans</h1>
      <section className="flex flex-wrap  justify-center">
        <Card departments="2 departments" name="school loan" type="loan" />
        <Card departments="2 departments" name="agriculture loan" type="loan" />
        <Card departments="2 departments" name="financial loan" type="loan" />
      </section>
      </div>
    </section>
  );
}
