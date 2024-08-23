import { useState } from "react";

function init() {
  console.log("init was executed");
  return Math.random();
}

export default function Counter() {
  let [count, setCount] = useState(init());
 console.log("Component was rerenderd");

  let inCount = () => {
   setCount((currCount) => {
        return currCount+1;
   });
  };

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>Increment Counter</button>
    </div>
  )
}






