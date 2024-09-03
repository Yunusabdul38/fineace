
export default function Footer() {
  return (
    <footer className='border-t border-[#808080] bottom-0 p-10 font-Urbanist text-[#1A1A1A] capitalize mt-20'>
        <nav className='flex flex-col sm:flex-row items-start justify-between flex-wrap gap-7 sm:gap-0'>
        <ul><div className="w-fit uppercase text-3xl font-bold bg-hero-2 bg-right-top text-orangeText  cursor-pointer">
       <h3> fineace</h3>
       <h5 className="text-xs font-thin text-gray-500">investment group</h5>
      </div>
        <h5>Pacific Century Place 16/F SCBD Lot 10, Jl. Jend. <br/> Sudirman Kav. 52-53, Jakarta 12190</h5>
      
      </ul>
      <ul>
        <li>home</li>
        <li>product</li>
        <li>industries</li>
        <li>about</li>
        <li>blog</li>
      </ul>
      <ul>
        <li>FAQ</li>
        <li>community</li>
        <li>join the team</li>
        <li>legal stuff</li>
        <li>terms and services</li>
      </ul>
        </nav>
        <p className='text-center pt-4'>Copyright @Fineace 2024. All Rights Reserved.</p>
      </footer>
  )
}