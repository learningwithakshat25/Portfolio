import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <div className='bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white'>
    <Header/>
    <div className="outlet w-screen  container mx-auto p-4">
    <Outlet/>
    </div>
    <Footer/>
    </div>
    </>
  )
}
// #134338
// bg-gradient-to-b from-[#f3eded] to-[#96ebd7]



export default AppLayout