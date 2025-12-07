import { useEffect, useRef, useState } from 'react'

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
