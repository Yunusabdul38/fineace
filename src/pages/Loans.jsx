import Footer from "../components/footer";
import NavigationBar from "../components/navigation";
import Frame from "../assets/Frame (1).svg";

export default function Loans() {
  return (
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
            Flexible Loans,<br /> Tailored for Your Needs.
            </h1>
            <p className="text-[#808080]">
              Investment management refers to the handling of financial assets
              and other investments—not only buying and selling them.
            </p>
        
              <button className="bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-fit">
                request fund
              </button>
            
          </div>
        </header>
      </div>
      <h1 className="uppercase text-xl font-LexendDeca font-bold px-5 sm:px-10">total budget: <span className="text-orangeText">500,000</span></h1>
      
      <Footer />
    </section>
  )
}
