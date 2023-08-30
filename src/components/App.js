
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
const [prev, setPrev] = useState(0);
const [sum, setSum] = useState(0);

function updateSum(e){
  let num = parseInt(e.target.value);
  setSum(num+sum)
  setPrev(num)
  // console.log(typeof sum);
}

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Sum Calculator</h1>
        <input type="number" onChange={updateSum}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
