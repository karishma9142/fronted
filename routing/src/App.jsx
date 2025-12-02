import { useState } from 'react';
import { BrowserRouter , Routes , Route , Link , useNavigate} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
     <BrowserRouter>
     <Link to="/">Neet</Link>
     |
     <Link to="/neet/online-coaching-class-11">class11</Link>
     |
     <Link to="/neet/online-coaching-class-12">class12</Link>
     <Routes>
      <Route path='/neet/online-coaching-class-11' element={<Class11program/>}/>
      <Route path='/neet/online-coaching-class-12' element={<Class12program/>}/>
      <Route path='/' element={<Landing/>}/>
      <Route path='*' element={<ErrorPage/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

function ErrorPage(){
  return <div>
    sorry page not found
  </div>
}
function Landing(){
  return <div>
    landing page
  </div>
}

function Class12program(){
  const navigate = useNavigate();
  
  function redirectUser(){
    navigate("/")
  }
  return <div>
    neet programs for class 12
    <button onClick={redirectUser}>go back to landing page</button>
  </div>
}

function Class11program(){
  return <div>
    neet programs for class 11
  </div>
}

export default App
