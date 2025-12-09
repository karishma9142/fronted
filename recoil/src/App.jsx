import { Children, createContext, useContext, useState } from 'react'
import {RecoilRoot,atom, useRecoilValue, useSetRecoilState} from 'recoil'
import './App.css'
import { CounterAtom } from './store/atoms/counter'


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

function App(){
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}
function Counter(){
  return(
    <>
    <CurrentCount/>
    <IncCnt/>
    <DecCnt/>
    </>
  )
}
function CurrentCount(){
  const count = useRecoilValue(CounterAtom);
  return <div>
    {count}
  </div>
}
function IncCnt(){
  const setCount = useSetRecoilState(CounterAtom);
  return <div>
    <button onClick={() => setCount(c => c+1)}>Inc cnt</button>
  </div>
}
function DecCnt(){
  const setCount = useSetRecoilState(CounterAtom);
  return <div>
    <button onClick={() => setCount(c => c-1)}>Dec cnt</button>
  </div>
}
export default App
