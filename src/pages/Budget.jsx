import Frame from "../assets/Frame (1).svg"
import Footer from "../components/footer";
import NavigationBar from "../components/navigation";
export default function Budget() {
  return (
    <section className="">
       <NavigationBar/> 
      <div className="bg-[#FFF3E5]">
          <header className="flex flex-col-reverse justify-between items-center w-full py-10 sm:flex-row-reverse my-20 md:w-11/12 mx-auto">
            <img src={Frame} alt="frame avater" className="w-4/5 md:w-1/2 lg:w-2/5" />
            <div className="px-10 font-Urbanist w-full md:w-1/2 gap-5 grid ">
              <h1 className="text-[#1A1A1A] font-semibold text-2xl sm:text-3xl  lg:text-4xl">Managing investment <br/> has never been easier</h1>
              <p className="text-[#808080]">
                Investment management refers to the handling of financial assets and
                other investments—not only buying and selling them.
              </p>
              <button className="bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-fit"> Let’s Get a Rich</button>
            </div>
          </header>
      </div>
      <section className="mt-20">
        <table></table>
      </section>
      <Footer/>
    </section>
  );
}
