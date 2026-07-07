import React, { useState } from 'react'

function count() {

    // use useState hook
    // const [state, fn] = useState(initial value);
    const [count, setCount] = useState(0);

    function addVlaue(){
        setCount(count+1);
    }

    function removeVlaue(){
        setCount(count-1);
    }
    
    
  return (
    <div>
        <h1>counter: {count}</h1>
        <button onClick={addVlaue}> + </button>
        <br />    
        <button onClick={removeVlaue}> - </button>
    </div>
  )
}

export default count