import { useState } from "react";
import Card from "./Card";

export default function Container() {

  const [countState, setState] = useState('Codwerk');
  
  return (
    <div>
      <h1>Les props</h1>
      <Card title={countState} id={1} changeTitle={setState}  />
    </div>
  )
}
