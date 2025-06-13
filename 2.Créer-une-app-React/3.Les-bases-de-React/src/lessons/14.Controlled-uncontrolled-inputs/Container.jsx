import "./Container.css"
import { useState, useRef } from "react";

export default function Container() {

  const [nom, setNom] = useState("");
  const emailRef = useRef();

  const handleChange = (e) => {
    setNom(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nom, emailRef.current.value);
  }

  return (
    <div>
      <h1>Composants "controlled" et "uncontrolled"</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom</label>
        <input type="text" id="nom" value={nom} onChange={handleChange} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" ref={emailRef} />

        <button type="submit">Envoyer</button>
      </form>

      <p>Nom: {nom}</p>
      <p>Email: {emailRef.current.value}</p>
    </div>
  )
}
