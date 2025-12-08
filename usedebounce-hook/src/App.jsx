import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// what is useDabounce
// A useDebounce hook in React is used to delay updating a value until a certain amount of time has passed without any new changes.
// It is commonly used for:
// Search inputs
// API calls
// Filtering lists
// Preventing unnecessary re-renders or heavy computations

// example => Imagine you're typing in a search bar:

// k -> ka -> kar -> kari → karishma

// Without debounce → API will call for every keypress
// With debounce → API will call only when typing stops for, say, 500ms.
// So useDebounce reduces the number of updates and makes your app faster.



// function useDebounce(sendDataToBackend){
//   const currentClock = useRef();
//   const fn = () => {
//     clearTimeout(currentClock.current);
//     currentClock.current = setTimeout(sendDataToBackend , 200);
//   }
//   return fn;
// }
// function App() {
//   function sendDataToBackend(){
//     fetch("api.amazon.com/search/");
//   }
//   const debounceFn = useDebounce(sendDataToBackend);

//   return (
//     <>
//       <input type="text" onChange={debounceFn}/>
//     </>
//   )
// }

//  better version of debaounce


function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);  
    };
  }, [value, delay]);

  return debouncedValue;
}

function App(){
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 200);

  useEffect(() => {
    console.log("API call with:", debouncedText);
    fetch("api.amazon.com/search/");
  }, [debouncedText]);

  return (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Search..."
    />
  );
}


export default App
