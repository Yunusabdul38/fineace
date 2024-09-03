import React from 'react'
import NavigationBar from './components/navigation'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'

export default function App() {
  return (
    <div className='overflow-hidden'>
      <NavigationBar/>
      <div className='mt-[5rem]'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}
