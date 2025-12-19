import React, { useEffect, useState } from 'react'
import './App.css'
import { LeftSideBar } from './componenet/leftSideBar'
import { MainComponent } from './componenet/mainComponent'
import useMediaQuery from './componenet/useMediaQuery'


export default function App() {
  const [sidebarOpen, setSidebarOpen] =  useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  
  useEffect(() => {
    if (isDesktop == false) {
      setSidebarOpen(false)
    } else {
      setSidebarOpen(true)
    }
  }, [isDesktop]);

  return <div className='bg-[url(./assets/dark-bg.jpg)] h-screen w-full bg-no-repeat bg-cover flex'>
    <LeftSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    <MainComponent sidebarOpen={sidebarOpen}/>
  </div>
}


// export default function App() {
//   return (
//     // <>
//     //   <div className='grid grid-cols-12'>
//     //     <div className='sm:col-span-5 col-span-12 bg-green-300'>
//     //       hii threr from first div
//     //     </div>
//     //     <div className='sm:col-span-5 col-span-12 bg-red-300'>
//     //       hii there from second div
//     //     </div>
//     //     <div className='sm:col-span-2 col-span-12 bg-pink-300'>
//     //       hii there from third div
//     //     </div>
//     //   </div>
//     // </>
//     <div className="min-h-screen w-full bg-[#002C58] flex items-center justify-center flex-col overflow-hidden">
//       <h1 className="text-[#73D5E0] text-3xl font-bold">Webinar.<span className='text-white'>gg</span></h1>
//       <h1 className="text-white text-2xl py-10 mt-10 font-bold">Let's Get Started</h1>
//       <input className='border-[#1E476F] border w-72 h-11 bg-[#19416A] p-2 rounded-lg text-[#375C80] font-bold' type="email" placeholder='Email id'/>
//       <button className='border-[#1E476F] border w-72 h-10 bg-[#8095AA] mt-8 rounded-lg text-white'>Continue</button>
//       <div></div>
//     </div>
//   )
// }

