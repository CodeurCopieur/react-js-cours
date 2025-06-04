import { useState } from "react";

export default function Container() {

  const [countState, setCountState] = useState(2);  

  const handleClick = () => {
    setCountState(countState + 1);
  }

  return (
    <div>
      <h1>Le state</h1>
      <p>{countState}</p>
      <button onClick={() => setCountState(countState + 1)}>Click me</button>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
