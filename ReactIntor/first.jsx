import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function onClickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <Button onClickHandler={onClickHandler} count={count} />
    </div>
  )
}

// Custom Button component
function Button({ onClickHandler, count }) {
  return (
    <button onClick={onClickHandler}>
      Count {count}
    </button>
  )
}

export default App;
