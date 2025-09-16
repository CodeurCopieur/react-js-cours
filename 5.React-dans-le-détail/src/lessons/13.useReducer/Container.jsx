import { useReducer } from "react";

export default function Container() {

  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return state + action.payload;
      case 'decrement':
        return state - 1;
      case 'reset':
        return 0;
      default:
    }
  }

  return <div>
    <h1>Valeur du compteur : </h1>
    <p>{state}</p>
    <button 
    onClick={() => dispatch({ type: 'increment', payload: 2 })}
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
      }}>Incrementer</button>
    <button onClick={() => dispatch({ type: 'decrement' })}
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
      }}>Decrementer</button>
    <button onClick={() => dispatch({ type: 'reset' })}
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
      }}>Reset</button>
  </div>
}
