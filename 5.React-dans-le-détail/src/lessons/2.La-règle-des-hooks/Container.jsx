/* 1. Toujours exécuter les Hooks au plus haut niveau de la fonction.
Ne pas coder d'appels de Hooks dans des conditions, des boucles, etc...

2. Toujours exécuter les Hooks dans un composant ou un hook personnalisé, afin de garder la logique dans un environnement React.
*/

import { useState } from "react";

export default function Container() { 
  const [s1, setS1] = useState(0);

  if(s1 < 1) {
    const [s2, setS2] = useState(0);
  }

  const [s3, setS3] = useState(0);

  return (
    <div>
      <h1>Les règles des Hooks</h1>
      <button onClick={() => setS1(s1 + 1)}>s1 + 1</button>
      <p>s1 : {s1}</p>
      <p>s3 : {s3}</p>
    </div>
  )
}
