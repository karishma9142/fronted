import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useTheme() {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    { theme === "light" ?  setTheme("dark"): setTheme("light") }
  }
  return { theme, toggleTheme }
}

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        height: "100vh",
        width : "100vw",
        margin : "0",
        padding : "0",
        top : "0",
        left : "0",
        right : "0",
        boxSizing : "border-box"
      }}
    >
      <p style={{ color: theme === "light" ? "black" : "white" }}>hello</p>

      <button
        style={{
          backgroundColor: theme === "light" ? "black" : "white",
          color: theme === "light" ? "white" : "black",
          padding: "10px",
        }}
        onClick={toggleTheme}
      >
        toggle
      </button>
    </div>
  );
}


export default App
