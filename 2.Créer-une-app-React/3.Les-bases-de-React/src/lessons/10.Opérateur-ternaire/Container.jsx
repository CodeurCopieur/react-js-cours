import { useState } from "react"
import "./Container.css"

export default function Container() {

  const [validation, setValidation] = useState(false);
  
  
  return (
    <div>
      <h1>Opération ternaire</h1>
      <form>
        <input type="checkbox" onChange={() => setValidation(!validation)} />
        <p 
        style={{ color: validation ? "green" : "red" }}
        className={validation ? "b-w" : ""}
        >
          {validation ? "Vous êtes connecté" : "Vous n'êtes pas connecté"}
        </p>
        {validation ? <p>true</p> : <p>false</p>}
      </form>
    </div>
  )
}
