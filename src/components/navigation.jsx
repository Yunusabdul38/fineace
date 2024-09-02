import { CiHeart, CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";

export default function NavigationBar() {
  const [menu, setMenu] = useState(false);

  function menuHandler() {
    setMenu((prev) => !prev);
  }

  return (
    <nav
      className="w-full capitalize flex flex-col sm:flex-row justify-between sm:items-center border-b py-7 px-5 sm:pr-20 sm:h-20 lg:h-fit lg:pr-10 md:py-4 lg:px-10 fixed z-10 bg-white top-0"
    >
      <div
        className="w-fit absolute top-10 sm:top-[30px] text-2xl right-4 sm:block lg:hidden"
        onClick={menuHandler}
      >
        {!menu ? <CiMenuFries /> : <HiXMark />}
      </div>
      <h3 className="w-fit uppercase text-3xl font-bold bg-hero-2 bg-right-top ">
        indigo
      </h3>
      <ul
        className={`flex sm:flex-row sm:absolute lg:relative sm:top-24 lg:top-0 sm:left-0 py-4 lg:py-0 sm:bg-white lg:bg-inherit sm:justify-around sm:w-full lg:w-fit ${
          !menu ? "hidden" : "flex-col"
        } lg:flex md:flex-row justify-between md:items-center gap-3 md:gap-5 w-fit`}
      >
        <li>new arrival</li>
        <li>for men</li>
        <li>for women</li>
        <li>brands</li>
        <li>catalog</li>
      </ul>
      <ul
        className={`sm:flex ${
          !menu ? "" : ""
        } flex-col flex sm:flex-row justify-between sm:items-center gap-2 md:gap-5 w-fit`}
      >
        <form className="relative w-fit hidden sm:block">
          <input
            type="text"
            className="bg-inherit outline-none peer-[focus]: border-gray-500 border rounded-sm pl-8 p-1 focus:rounded-3xl p transition-all h-8"
            placeholder="search for item"
          />
           <CiSearch className="absolute left-1 top-0 text-gray-800 p-1 text-4xl" />
        </form>
        <div className="flex gap-4 min-[270px]:absolute sm:relative min-[340px]:top-9 sm:top-0 sm:right-0 z-50 min-[340px]:right-[17%]">
        <button className="bg-cyan-950 text-white border hover:bg-white hover:border-gray-500 hover:text-black transition-all rounded-md px-2 capitalize">sign in</button>
            <div className="before:absolute before:bg-gray-500 after:flex after:bg-blue-300 before:rounded-full before:content-[attr(before)] before:text-slate-50 before:text-center before:p-1 before:text-xs before:ml-4" before="11">
                <CiHeart className="text-gray-800  text-3xl w-fit" />
            </div>
            <div className="before:absolute before:bg-gray-500 after:flex after:bg-blue-300 before:rounded-full before:content-[attr(before)] before:text-slate-50 before:text-center before:p-1 before:text-xs before:ml-4" before="11">
                <CiShoppingCart className="text-gray-800 text-3xl w-fit" />
            </div>
        </div>
      </ul>
    </nav>
  );
}
