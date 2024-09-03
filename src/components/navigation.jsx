import { CiHeart, CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const [menu, setMenu] = useState(false);

  function menuHandler() {
    setMenu((prev) => !prev);
  }

  return (
    <nav
      className="w-full capitalize flex flex-col sm:flex-row justify-between sm:items-center border-b py-7 px-5 sm:pr-20 sm:h-20 lg:h-fit lg:pr-10 md:py-4 lg:px-10 fixed z-10 bg-white top-0 font-Urbanist"
    >
      <div
        className="w-fit absolute top-10 sm:top-[30px] text-2xl right-4 sm:block lg:hidden"
        onClick={menuHandler}
      >
        {!menu ? <CiMenuFries /> : <HiXMark />}
      </div>
      <div className="w-fit uppercase text-3xl font-bold bg-hero-2 bg-right-top text-orangeText  cursor-pointer">
       <h3> fineace</h3>
       <h5 className="text-xs font-thin text-gray-500">investment group</h5>
      </div>
      <ul
        className={`flex sm:flex-row sm:absolute lg:relative sm:top-20 lg:top-0 sm:left-0 py-4 lg:py-0 sm:bg-white lg:bg-inherit sm:justify-around sm:w-full lg:w-fit ${
          !menu ? "hidden" : "flex-col"
        } lg:flex md:flex-row justify-between md:items-center gap-3 md:gap-5 w-fit`}
        onClick={()=>setMenu(false)}
      >
        <NavLink to="/"><li>home</li></NavLink>
        <NavLink to="/product" className="hover:text-[#FF450D]">
          <li>product</li>
        </NavLink>
        <NavLink to="/product" className="hover:text-[#FF450D]">
          <li>industries</li>
        </NavLink>
        <NavLink to="/product" className="hover:text-[#FF450D]">
          <li>about</li>
        </NavLink>
      </ul>
      <ul
        className={`${
          !menu ? "min-[360px]:absolute sm:relative min-[360px]:right-14 sm:right-0 max-[360px]:hidden" : ""
        }  flex sm:flex-row justify-between sm:items-center gap-2 md:gap-5 w-fit`}
      >
        <button className="hover:bg-orangePrimary bg-white hover:text-white border-2 text-orangeText border-orangeText hover:border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal">sign in</button>
        <button className="hover:bg-orangePrimary bg-white hover:text-white border-2 text-orangeText border-orangeText hover:border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal">sign up</button>
      </ul>
    </nav>
  );
}
