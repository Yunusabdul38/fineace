import { Link } from "react-router-dom";
export default function Card({name, departments,type}) {
  const img = type==="loan"?"bg-money":"bg-coins"

  return (
    <div className="bg-slate-50 p-4 w-64 grid gap-3 rounded-lg font-LexendDeca min-w-[350px]">
        <div className={`${img} w-full h-40 bg-coin transition-all duration-500 hover:bg-center bg-[0px_-50px] bg-cover rounded-lg `} />
        <h2 className="font-semibold text-xl">{name}</h2>
        <h4 className="text-[#808080]">{departments}</h4>
        <Link to={type=="loan"?`/loans/${name?.replaceAll(" ","-")}`:type=="budget"?`/budget/${name?.replaceAll(" ","-")}`:`/know-more/${name?.replaceAll(" ","-")}`} className="text-center w-full bg-orangePrimary hover:bg-white text-white border-2 hover:text-orangeText hover:border-orangeText border-transparent transition-all duration-500 ease-in-out rounded-md px-2 py-1 sm:px-7 sm:py-2 capitalize font-LexendDeca font-normal">view details</Link>
    </div>
  )
}
