import { useEffect, useState } from 'react'
import './Card.css'

const Card = () => {

    const [state, setState] = useState(0);

    useEffect(() => {
        console.log("creation(Mouting) : useEffect");
        return () => console.log("mise à jour(update): Fonction de nettoyage");
    });

    return (
        <div className='card'>
            <p>state : {state}</p>
            <button onClick={() => setState(state + 1)}>+1</button>
        </div>
    )
}

export default Card