import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'


function useFetch(url){
  const [data , setdata] = useState(null);
  const [loading , setloading] = useState(true);
  async function helper(url) {
    const respose = await axios.get(url);
    setdata(respose.data);
    setloading(false)
  }

  useEffect(()=>{
    helper(url)
  } , [url])
  return {data , loading};
}

function App() {
  const {data, loading} = useFetch("https://jsonplaceholder.typicode.com/todos/1")
  return (
    <>
    {loading ? <p>Loading...</p> : <p>Data: {JSON.stringify(data)}</p>}
    </>
  )
}

export default App
