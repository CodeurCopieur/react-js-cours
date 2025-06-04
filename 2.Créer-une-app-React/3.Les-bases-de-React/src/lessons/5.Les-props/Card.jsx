import React from 'react'

export default function Card({ title, id, changeTitle }) {
  return (
    <div>
        <h1>title : {title} :)</h1>
        <p>Voici le contenu de la card</p>
        <p>id : {id}</p>
        <button onClick={() => changeTitle('Hello Codwerk')}>Change title</button>
    </div>  
  )
}
