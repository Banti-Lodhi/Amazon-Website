import { useEffect, useState } from "react";
export default function Counter1() {
  let [countX, setCountX] = useState(0);
  let [countY, setCountY] = useState(0);

      let intCountX = () => {
      setCountX((currCount) => currCount+1)
    };
    let intCountY = () => {
      setCountY((currCount) => currCount+1)
    };

    useEffect(function printSomething() {
      console.log("this is a side-effect");    
    }, 
    []
    );
  return (
    <>
    <h3>countX={countX}</h3>
    <button onClick={intCountX}>+1</button>
    <h3>countY={countY}</h3>
    <button onClick={intCountY}>+1</button>
    </>
  );
}