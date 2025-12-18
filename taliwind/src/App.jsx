import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LeftSideBar } from './componenet/leftSideBar'
import { Toggle } from './componenet/toggle'



export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="h-screen bg-white dark:bg-blue-50">
      <h1 className="text-black dark:text-white">Hello world</h1>

      <button
        onClick={() => setDark(!dark)}
        className="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 dark:text-white"
      >
        toggle
      </button>
    </div>
  );
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

