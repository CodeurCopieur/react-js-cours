import { useRef, useState } from "react";

// 1 - isoler une valeur parmi les mise à jour

// 2 - selectionné un élément du DOM


export default function Container() {
  const inputRef = useRef(0);
  const [state, setState] = useState(0);

  const handleClick = () => {
    inputRef.current++;
    console.log(inputRef.current);
    console.log(paragraphRef.current);
  }

  const paragraphRef = useRef(null);
  console.log(paragraphRef.current);

  return (
    <div>
      <h1>Comprendre les refs</h1>
      <p>valeur de la Ref: {inputRef.current}</p>
      <p>valeur du state: {state}</p>
      <button onClick={handleClick}>Incrementer la ref</button>
      <button onClick={() => setState(state + 1)}>Incrementer le state</button>  

      <p className="paragraphRef" ref={paragraphRef}>Hello</p>
    </div>
  )
}
