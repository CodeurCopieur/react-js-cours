import "./Container.css"
import Calculate from "./Calculate";
import { useState } from "react";

export default function Container() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>useMemo</h1>
      <Calculate />
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px',
          marginBottom: '10px',
          width: 'auto',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}
        >+1</button>
      <p>count : {count}</p>
    </div>
  )
}
