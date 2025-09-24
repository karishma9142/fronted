import { useState , useEffect} from "react"


function App() {
  return <div>
   <b>
   hi karishma
   </b>
   <Counter></Counter>
  </div>
}
 // mounting , re-rendering , unmounting
function Counter(){
  const [count,setCount] = useState(0);


  // mountend function 


  // useEffect(function(){
  //   setInterval(function(){
  //     setCount(count=>count+1);
  //   },1000)
  // },[]);


  // function incCount(){
  //   setCount(count+1);
  // }
  // function decCount(){
  //   setCount(count-1);
  // }
  // function restart(){
  //   setCount(0);
  // }
  return <div>
    <h1 id="text">{count}</h1>

    
    {/* // <button onClick={incCount}>inc count </button> */}
    {/* <button onClick={decCount}>dec count</button>
    <button onClick={restart}>restart</button> */}
  </div>
}
export default App
