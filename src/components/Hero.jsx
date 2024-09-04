import Frame from "../assets/Frame (1).svg";

export default function Hero({
  address,
  modalHandler,
  heroText,
  subText,
  paragraph,
  btnText,
  btn,
}) {
  return (
    <header className="flex flex-col-reverse justify-between items-center w-full py-10 md:flex-row-reverse my-20 md:w-11/12">
      <img
        src={Frame}
        alt="frame avater"
        className="w-full sm:w-3/5 md:w-1/2 lg:w-2/5"
      />
      <div className="px-5 sm:pl-10 font-Urbanist w-full md:w-1/2 gap-5 grid ">
        <h1 className="text-[#1A1A1A] font-semibold sm:text-3xl text-4xl md:text-5xl lg:text-5xl uppercase">
          {heroText}
          <br />
          {subText}
        </h1>
        <p className="text-[#808080]">{paragraph}</p>
        {!address || btn==="no-btn" && (
          <button
            className="bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal w-fit"
            onClick={modalHandler}
          >
            {btnText}
          </button>
        )}
      </div>
    </header>
  );
}
