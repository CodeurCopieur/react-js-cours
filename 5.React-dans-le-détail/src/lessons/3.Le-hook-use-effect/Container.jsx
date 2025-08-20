import "./Container.css"
import { useState, useEffect } from "react"

export default function Container() {

    const [count, setCount] = useState(0);

    console.log("3 hook useEffect : render");

    useEffect(() => {
        console.log("3 hook useEffect : useEffect");
    }, []);  
  
  return (
    <div>
      <h1>Le hook useEffect</h1>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
