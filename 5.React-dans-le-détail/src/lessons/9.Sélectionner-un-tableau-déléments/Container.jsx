import { useState, useRef, useEffect} from 'react'


export default function Container() {

  const inputRef = useRef([]);

  function addInputRef(el) {
    if( el && !inputRef.current.includes(el)){
      inputRef.current.push(el);
    } 

    console.log('inputRef.current : ', inputRef.current);

  }

  return (
    <>
      <h1>Sélectionner un tableau d'éléments</h1>

      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
    </>
  )
}
