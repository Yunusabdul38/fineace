import Frame from "../assets/Frame (2).svg";
import { useView } from "../hook/useView";
export default function AboutUs() {
    useView()
  return (
    <div className="overflow-hidden"> 
      <div className="font-Urbanist">
        <header className="flex flex-col justify-between items-center bg-[#FFF3E5] w-full py-10 sm:flex-row-reverse">
          <img
            src={Frame}
            alt="frame avater"
            className="w-4/5 md:w-1/2 lg:w-2/5"
          />
          <div className="px-5 md:pl-10 font-Urbanist w-full md:w-1/2 gap-5 grid">
            <h1 className="text-[#1A1A1A] font-semibold sm:text-3xl text-4xl md:text-5xl lg:text-5xl uppercase">
            Master Your Money,<br /> Simplify Your Future
            </h1>
            <p className="text-[#808080]">
              Investment management refers to the handling of financial assets
              and other investments—not only buying and selling them.
            </p>
            <button className="bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-fit">
              {" "}
              Let’s Get a Rich
            </button>
          </div>
        </header>
        <section className="mt-20 md:px-20 grid gap-5 px-5">
          <h1 className="font-LexendDeca text-2xl sm:text-4xl font-medium sm:font-bold text-orangeText">
            Welcome to FineAce, your trusted partner <br/> in digital finance, loan and
            budgeting.
          </h1>
          <p className="md:w-3/4 text-lg text-[#808080]">
            We are committed to making financial management simple, intuitive,
            and effective for everyone. At FineAce, we believe that
            understanding and controlling your finances shouldn’t be complicated
            or overwhelming. That’s why we’ve designed our platform to help you
            effortlessly track your spending, set achievable financial goals,
            and make informed decisions. Our mission is to empower you to take
            control of your financial future with confidence. Join us on the
            path to financial wellness and freedom!
          </p>
        </section>
      </div>
    </div>
  );
}
