import { useState , useEffect} from "react"

// condition rendering
function App() {
  const [CounterVisible,setCounterVisible]=useState(true);
  return <div>
   <h3>hii there</h3>
    {CounterVisible?<Counter></Counter>:null}
    <button onClick={() => setCounterVisible(false)}>hide counter</button>
    <button onClick={()=>setCounterVisible(true)}>Show counter</button>
  </div>
}
function Counter(){
  const [count,setCount] = useState(0);

   // mounting
  useEffect(function(){
    setInterval(function(){
      setCount(count => count+1)
    },1000);

    // unmounting
    return function(){
      clearInterval(count);
    }
  },[])
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
