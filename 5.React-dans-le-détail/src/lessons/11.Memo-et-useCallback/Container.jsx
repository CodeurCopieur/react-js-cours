import { useState, useCallback } from "react";
import Card from "./Card";    

export default function Container() {
  const [count, setCount] = useState(0);

  const customLog = useCallback(() => {
    console.log("customLog");
  }, [])

  return (
    <div>
      <h1>Memo et useCallback</h1>
      <Card text="Hello boss" customLog={customLog} />
      <button onClick={() => setCount(count + 1)}
        style={{width: '100px', height: '50px', marginTop: '10px'}}
        >+1</button>
      <p>count : {count}</p>
    </div>
  )
}
