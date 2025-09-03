import { useState, useEffect } from 'react'

export default function Container() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(state => state + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <h1>Valeur du compteur : </h1>
      <p>{count}</p>
    </div>
  )
}
