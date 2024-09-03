import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="bg-slate-50 p-4 w-64 grid gap-3 rounded-lg font-LexendDeca">
        <div className="w-full h-40 bg-gray-300 rounded-lg" />
        <h2 className="font-semibold text-xl">kaduna state budget</h2>
        <h4 className="text-[#808080]">4 department</h4>
        <Link to="/budget" className="text-center w-full bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal">view details</Link>
    </div>
  )
}
