import Card from './Card'
import { useState } from 'react'

export default function Container() {
  const [showCard, setShowCard] = useState(true);


  return (
    <div>
      <h1>Cleanup function</h1>
      {showCard && <Card/>}
      <button 
        onClick={() => setShowCard(!showCard)} 
        style={{width: '100px', height: '50px', marginTop: '10px'}}
      >
        {showCard ? 'Hide Card' : 'Show Card'}
      </button>
    </div>
  )
}
