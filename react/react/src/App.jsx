import { useState } from "react"


function App() {
  return <div>
   <h3>hii there</h3>
    <Counter></Counter>
  </div>
}
function Counter(){
  const [count,setCount] = useState(0);

  function incCnt(){
    setCount(count+1);
  }

  function decCnt(){
    setCount(count-1);
  }
  return <div>
    <h1 id="text">{count}</h1>
    <button onClick={incCnt}>Inc cnt</button>
    <button onClick={decCnt}>dec cnt</button>
  </div>
}
export default App
