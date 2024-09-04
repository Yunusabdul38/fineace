import Frame from "../assets/Frame.svg";
import icon1 from "../assets/e.jpg";
import icon2 from "../assets/c.png";
import icon3 from "../assets/b.png";
import icon4 from "../assets/80.png";
import icon5 from "../assets/Fill 1.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../components/Card";
import { useView } from "../hook/useView";
import { Link } from "react-router-dom";
export default function Home() {
  useView()
  return (
    <div className="">
      <header className="flex flex-col sm:flex-row justify-between items-center bg-[#FFF3E5] w-full py-10">
        <img src={Frame} alt="frame avater" className="w-4/5 md:w-1/2 lg:w-2/5" />
        <div className="px-10 font-Urbanist w-full md:w-1/2 gap-5 grid ">
          <h1 className="text-[#1A1A1A] font-semibold sm:text-3xl text-4xl md:text-5xl lg:text-5xl uppercase">Managing investment <br/> has never been easier</h1>
          <p className="text-[#808080]">
            Investment management refers to the handling of financial assets and
            other investments—not only buying and selling them.
          </p>
          <Link to="/about-us" className="bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-fit">know more</Link>
        </div>
      </header>
      <section className="font-Urbanist text-[#1A1A1A] p-10 mt-20 relative">
        <img src={icon4} className="absolute md:-top-64 -top-44 -right-2 w-[100px] md:w-fit"/>
        <div className="flex flex-col gap-5 sm:flex-row mb-10 mx-auto justify-center">
            <div className="sm:w-1/2 md:w-2/5">
                <h2 className="text-orangeText font-semibold">why choose us?</h2>
                <h1 className="text-[#1A1A1A] font-semibold sm:text-3xl text-4xl md:text-5xl lg:text-5xl">We are the team <br/> of enthusiasts</h1>
            </div>
            <div className="sm:w-1/2 md:w-2/5">
                <p>Our technology suite is engineered to support diverse business needs on-demand. Our communal culture, performance excellence and private cloud technology paves the way for unprecedented customer support.</p>
                <button className="flex gap-2 items-center mt-2 bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-fit"><span>Explore</span><IoIosArrowRoundForward className="text-2xl"/></button>
            </div>
        </div>
        <img src={icon5} className="absolute md:-bottom-52 -bottom-44 -left-2 w-[100px] md:w-fit"/>
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-start mt-20 gap-4">
        <div className="bg-white max-w-xs flex flex-col justify-center items-center p-5 rounded-sm gap-2 mx-auto">
      <img src={icon1} />
      <h2 className="text-xl font-medium">Saving more money easily</h2>
      <p className="text-[#808080]">
        we can help you save more money and keep you on your toes. by investing
        your funds, the money you have today can be more useful.
      </p>
    </div>
    <div className="bg-white max-w-xs flex flex-col justify-center items-center p-5 rounded-sm gap-2 mx-auto">
      <img src={icon2} />
      <h2 className="text-xl font-medium">Saving more money easily</h2>
      <p className="text-[#808080]">
        we can help you save more money and keep you on your toes. by investing
        your funds, the money you have today can be more useful.
      </p>
    </div>
    <div className="bg-white max-w-xs flex flex-col justify-center items-center p-5 rounded-sm gap-2 mx-auto">
      <img src={icon3} />
      <h2 className="text-xl font-medium">Saving more money easily</h2>
      <p className="text-[#808080]">
        we can help you save more money and keep you on your toes. by investing
        your funds, the money you have today can be more useful.
      </p>
    </div>
        </div>
      </section>
      <section className="mt-20 flex flex-wrap px-10 justify-center">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </section>
    </div>
  );
}
