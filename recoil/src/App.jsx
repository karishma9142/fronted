import { Children, createContext, useContext, useState } from 'react'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { CounterAtom } from './store/atoms/counter'
import { evenSelector } from './store/selector/selector'


// using context api => count , inc buttom and dec buttom renders but only count is changed so 
// only count should reender not the buttoms that's why context api is not a good way of state mangment 
// const CountContext = createContext();

// export function CountProvider({children}){
//   const [count , setCount] = useState(0);

//   return <CountContext.Provider value={{
//     count : count ,
//     setCount : setCount
//   }}>
//     {children}
//   </CountContext.Provider>
// }

// function App() {

//   return (
//     <>
//       <CountProvider>
//         <Count/>
//         <IncCount/>
//         <DecCount/>
//       </CountProvider>
//     </>
//   )
// }
// function Count(){
//   const {count} = useContext(CountContext);
//   return <div>
//     {count}
//   </div>
// }
// function IncCount(){
//   const {count , setCount} = useContext(CountContext);
//   return <div>
//     <button onClick={() => setCount(count+1)}>Inc cnt</button>
//   </div>
// }
// function DecCount(){
//   const {count , setCount} = useContext(CountContext);

//   return <div>
//     <button onClick={() => setCount(count-1)}>Dec Cnt</button>
//   </div>
// }




// now doing the same thing using recoil

// function App(){
//   return (
//     <RecoilRoot>
//       <Counter/>
//     </RecoilRoot>
//   )
// }
// function Counter(){
//   return(
//     <>
//     <CurrentCount/>
//     <IncCnt/>
//     <DecCnt/>
//     </>
//   )
// }
// function CurrentCount(){
//   const count = useRecoilValue(CounterAtom);
//   return <div>
//     {count}
//   </div>
// }
// function IncCnt(){
//   const setCount = useSetRecoilState(CounterAtom);
//   return <div>
//     <button onClick={() => setCount(c => c+1)}>Inc cnt</button>
//   </div>
// }
// function DecCnt(){
//   const setCount = useSetRecoilState(CounterAtom);
//   return <div>
//     <button onClick={() => setCount(c => c-1)}>Dec cnt</button>
//   </div>
// }





// learn selector

function App() {
  return <div>
    <RecoilRoot>
      <Buttons />
      <Counter />
      <IsEven />
    </RecoilRoot>
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(CounterAtom);
  return <div>
    <button onClick={() => setCount(c => c + 1)}>inc</button>
    <button onClick={() => setCount(c => c - 1)}>dec</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(CounterAtom); // subscribe to atom 
  return <div>
    {count}
  </div>
}

function IsEven() {
  const even = useRecoilValue(evenSelector); // subscribe to evenselector selctor
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App
