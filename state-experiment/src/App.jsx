import { useState } from 'react'
import bulbOn from './assets/blubon.png';
import bulbOff from './assets/bluboff.png';

// // using rooling up the state
// function App() {

//   return (
//     <>
//       <Lightblud />
//     </>
//   )
// }

// function Lightblud() {
//   // rolling up the state => when you want to use the variable of one child in another child 
//   // difne it in the lowet common ansscester from where you can pass it as prop to all chid so 
//   // they can use it
//   // it's not an optimal way to do state mangment it cause extra rerendering ====>
//   //  that's why for state mangment we use state mangment laibrery


//   const [bulbon, setBulbon] = useState(true);
//   return <>
//     <BuldState bulbon={bulbon} />
//     <ToggleblubState setBulbon={setBulbon} />
//   </>
// }
// // bulbon is prop to the bulb state componenet
// function BuldState({bulbon}) {
//   return <>
//     {bulbon ? "bulb on" : "bulb off"}
//   </>
// }
// // bulbon and setBulbon is prop to the ToggleblubState component
// function ToggleblubState({setBulbon}) {
//   return <>
//     <button onClick={() => setBulbon(prev => !prev)}>
//       Toggle Bulb
//     </button>
//   </>
// }

// using prop driling => it also a bad way to state mangment

function App() {
  const [bulbon, setBulbon] = useState(true);
  return (
    <>
      <Lightblud bulbon={bulbon} setBulbon={setBulbon} />
    </>
  )
}
function Lightblud({ bulbon, setBulbon }) {
  return <>
    <BuldState bulbon={bulbon} />
    <ToggleblubState setBulbon={setBulbon} />
  </>
}
// bulbon is prop to the bulb state componenet
function BuldState({ bulbon }) {

  return (
    <>
      <div style={{
        background: bulbon ? "#8B6A54" : "#867466",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",  
        width : "100vw" , 
        overflow : "hidden",
        boxSizing : "border-box",
        overflowX: "hidden"
      
      }}>
        <img
          style={{ height: "20vh", width: "10vw" , borderRadius : "50%"}}
          src={bulbon ? bulbOn : bulbOff}
          alt=""
        />
      </div>


    </>
  );


}
// bulbon and setBulbon is prop to the ToggleblubState component
function ToggleblubState({ setBulbon }) {
  return <>
    <button onClick={() => setBulbon(prev => !prev)}>
      Toggle Bulb
    </button>
  </>
}

// now using context api => good way to state mangment

export default App
