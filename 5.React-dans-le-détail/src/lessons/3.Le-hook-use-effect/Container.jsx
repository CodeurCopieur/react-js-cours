import "./Container.css"
import { useState, useEffect } from "react"

export default function Container() {

    const [count, setCount] = useState(0);

    console.log("render");

    useEffect(() => {
        console.log("useEffect");
    }, []);  
  
  return (
    <div>
      <h1>Le hook useEffect</h1>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
