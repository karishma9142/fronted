// import { useState , useEffect} from "react"



// /// normal rendering ***************************
// // function App() {
// //   return <div>
// //    <b>
// //    hi karishma
// //    </b>
// //    <Counter></Counter>
// //   </div>
// // }

// //conditional rendering ***********************

// function App(){
//   let [countVisible , setcountVisible]=useState(true);
//   useEffect(function (){
//     setInterval (function(){
//       setcountVisible(c => !c);
//     },5000)
//   },[])

//   return <div>
//     <div style = {{visibility : countVisible ? "hidden" : "visible"}}> <Counter></Counter></div>
//   </div>
// }
//  // mounting , re-rendering 
// function Counter(){
//   const [count,setCount] = useState(0);


//   // mountend function ****** useEffet ==> hook

//   // clearInterval
//   useEffect(function(){
//     let clock = setInterval(function(){
//       setCount(count=>count+1);
//     },1000)

//     // unmountend and cleanup

//     return function(){
//       clearInterval(clock);
//     }
//   },[]);   //***  [] ===> dependency array


//   // function incCount(){
//   //   setCount(count+1);
//   // }
//   // function decCount(){
//   //   setCount(count-1);
//   // }
//   // function restart(){
//   //   setCount(0);
//   // }
//   return <div>
//     <h1 id="text">{count}</h1>

    
//     {/* // <button onClick={incCount}>inc count </button> */}
//     {/* <button onClick={decCount}>dec count</button>
//     <button onClick={restart}>restart</button> */}
//   </div>
// }
// export default App





// ************* dependecny array  , props

import { useState ,useEffect } from "react";

export default function App(){
  const [count , setcount] = useState(0);
  function increase(){
    setcount(count=>count+1);
  }

  return <div>
    <Counter count={count}/>
    <button onClick={increase}>inc count</button>
  </div>
};

function Counter(props){
  useEffect(function(){
    console.log("mount");
    return function(){
      console.log("unmount")
    }
  },[]);

  useEffect(function(){
    /// console the current count 
    console.log("count has changed")
    
    return function(){
      //// cleaup the last count 
      console.log("cleanup got called");
    }
  },[props.count]);


  return <div>
    Counter {props.count}
  </div>
};