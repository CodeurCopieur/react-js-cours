import { useRef, useState } from 'react'
import { nanoid } from 'nanoid'

export default function DynamicRefSelection() {

    const fruitsRef = useRef([])

    const [fruits, setFruits] = useState([
        {id : nanoid(8), value: "🍇"},
        {id : nanoid(8), value: "🍌"},
        {id : nanoid(8), value: "🍊"},
        {id : nanoid(8), value: "🍎"}
    ])

    const deleteFruit = (id) => {
        setFruits(fruits.filter((fruit) => fruit.id !== id))
    }

    const handleRef = (el) => {
        if(el) { 
            fruitsRef.current.push(el) 
        } else { 
            fruitsRef.current.shift()
        }

        console.log(el)
    }

  return (
    <div>
        <ul>
            {fruits.map((fruit) => (
                <li 
                    key={fruit.id}
                    onClick={() => deleteFruit(fruit.id)}
                    ref={handleRef}
                >{fruit.value}</li>
            ))}
        </ul>
        <button 
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
            onClick={() => setFruits([...fruits, {id : nanoid(8), value: "🍍"}])}
        >ajout Fruit</button>
    </div>


  )
}