import { useEffect, useRef, useState } from 'react'

// In React, the component renders first, and useEffect runs afterward.
// That means usePrev first returns ref.current (the previous value, e.g., 2).
// Then the useEffect hook runs and updates ref.current to the new value (e.g., 3).
// For the initial count = 0, it returns undefined because there is no previous value yet.

function usePrev(state) {
  const ref = useRef();
  useEffect (() =>{
    ref.current = state
  },[state]);
  return ref.current; 
}

function App() {
  const [count, setCount] = useState(0)
  const prevState = usePrev(count);
  return (
    <>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>inc</button>
      <p>prev value {prevState}</p>
    </>
  )
}

export default App
