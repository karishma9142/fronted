import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// // why use useRef
// // bec useRef refrnece to a value , such that when you change the value component does not rerender 

// function App() {
//   const inputRef = useRef();
//   // refernce to a dom element 
//   function focusOnName(){
//     // document.getElementById("name").focus();   //they both do the same thing focus on anme input when we click on submit buttom
//     inputRef.current.focus();
//   }

//   // refernce to value

//   // const [value , setvalue] = useState("karishma"); // this will also change the value but the componenet will rerender

//   return (
//     <>
//       Sign Up
//       <input ref={inputRef} id='name' type="text" />
//       <input type="text" />
//       <button onClick={focusOnName}>submit</button>
//     </>
//   )
// }

// export default App


//  A clock with start and stop buttom
//  1 => using useState hook
function App(){
  const [currentCnt , setCurrentCnt] = useState(0);
  // let [timer , setTimer] = useState(0); // it do same thing as useRer but it do an extra reender 
  // that's why it is a worst way to refrnce or store a variable
  // less rerender => more optimized page

  const timer = useRef(); // useRef when you don't want to rerender on a change where html(page) is still same
  function startClock(){
    let value = setInterval(() =>{
      setCurrentCnt(currentCnt => currentCnt+1)
    },1000)
    timer.current=value
  }

  function stopClock(){
    clearInterval(timer.current)
  }
  return <>
  {currentCnt}
  <br />
  <button onClick={startClock}>start</button>
  <button onClick={stopClock}>stop</button>
  </>
}

export default App