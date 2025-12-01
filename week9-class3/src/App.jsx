import { useEffect, useState } from "react"

function App() {
  // // ****  
  // // loader nad tab changing condition redering 
  // const [currentTab , setCurrentTab] = useState(1);
  // const [tabData , setTabData] = useState({});
  // const [loading , setLoading] = useState(true);

  // // loader function

  // useEffect(function (){
  //   setLoading(true);
  //   fetch("your api")
  //   .then(async res =>{
  //     const json = await res.json();
  //     setTabData(json);
  //     setLoading(false);
  //   })
  // },[currentTab]); // tabchange as depnedency array (when the tab change useEffet run (run on the dependecy array condition);

  // return (
  //   <div>
  //     {loading ? "Loading..." : tabData}
  //   </div>
  // )
  // // ***

  const [count , setcount] = useState(0);


  function incCnt(){
    setcount(count=>count+1);
  }

  useEffect (function (){
    setInterval(incCnt,1000);

    // cleen up funtion run on unmounting
    return function (){
      clearInterval(count)
    }
  },[]) //run on mounting
  return (
    <div>
      {count}
    </div>
  )
}

export default App
