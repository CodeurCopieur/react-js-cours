import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/* 
StrictMode est un composant qui permet:
Détecter les effets de bord non intentionnels
Votre composant App sera rendu deux fois en développement
Tous les useEffect s'exécuteront deux fois
Les constructeurs de classe seront appelés deux fois
Cela aide à détecter les effets de bord non intentionnels */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
