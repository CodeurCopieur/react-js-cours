import { useState, useEffect } from "react"
import loading from "./loader-black.gif"
import "./Container.css"

export default function Container() {

  const [ApiData, setApiData] = useState({
    data: undefined,
    loading: false,
    error: false
  })

  useEffect(() => {
    setApiData({...ApiData, loading: true})
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      console.log(res)
      if(!res.ok) throw new Error("Erreur lors de la récupération des données")
      return res.json()
    })
    .then(data => {
      console.log(data)
      setApiData({...ApiData, data: data, loading: false})
    })
    .catch(error => setApiData({data : undefined, error: true, loading: false}))
  }, [])

  let content = null;
  if (ApiData.loading)  content = <img src={loading} alt="Loading" />
  else if (ApiData.error) content = <p>Error: Une erreur est survenue</p>
  else if (ApiData.data?.length > 0) {
    content = <ul>
      {ApiData.data.map((item, index) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <br />
          <span>{item.email}</span>    
          <br />
          <span>{item.phone}</span> 
          <br />
        </li>
      ))}
    </ul>
  } else if (ApiData.data?.length === 0) content = <p>Votre requête ne correspond à aucune donnée disponible.</p>


  return (
    <div>
      <h1>Appeler une API</h1>
      {content}
    </div>
  )
}
