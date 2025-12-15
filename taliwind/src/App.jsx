import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='sm:col-span-5 col-span-12 bg-green-300'>
          hii threr from first div
        </div>
        <div className='sm:col-span-5 col-span-12 bg-red-300'>
          hii there from second div
        </div>
        <div className='sm:col-span-2 col-span-12 bg-pink-300'>
          hii there from third div
        </div>
      </div>
    </>
  )
}
