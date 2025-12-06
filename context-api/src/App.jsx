import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
import { useContext } from 'react'

// a good way of state mangment => context api => this do rerender for buttoms too that's why we use recoil to minimize rerender

const BulbContext = createContext();

export function BulbProvider({children}){
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{
    bulbOn : bulbOn,
    setBulbOn : setBulbOn
  }}>
   {children}
  </BulbContext.Provider>
}
function App() {
 
  return (
    <>
      <BulbProvider>
        <Light/>
      </BulbProvider>
    </>
  )
}

function Light(){
  return (
    <div>
      <LightBulb/>
      <LightSwitch/>
    </div>
  )
}
function LightBulb(){
  const {bulbOn} = useContext (BulbContext);
  return <div>
    {bulbOn ? "bulb on" : "bulb off"}
  </div>
}
function LightSwitch(){
  const {bulbOn , setBulbOn} = useContext(BulbContext);
  function toggle(){
    setBulbOn(!bulbOn)
  }

  return <div>
    <button onClick={toggle }>toggle the bulb</button>
  </div>
}

export default App
