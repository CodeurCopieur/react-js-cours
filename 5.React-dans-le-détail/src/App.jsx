
import Fragments from './lessons/1.Les-fragments/Container'
import Hooks from './lessons/2.La-règle-des-hooks/Container'
import UseEffect from './lessons/3.Le-hook-use-effect/Container'
import CleanupFunction from './lessons/4.Cleanup-function/Container'
import AddGlobalEvent from './lessons/5.Ajouter-un-évènement-global/Container'
import CallApi from './lessons/6.Appeler-une-API/Container'
import UseObserver from './lessons/7.Utiliser-un-observateur/Container'
import UseInterval from './lessons/8.Utiliser-setInterval/Container'      
import SelectArray from './lessons/9.Sélectionner-un-tableau-déléments/Container'

function App() {

  return (
    <div className="main-content">
      <Fragments/>
      <hr />
      <br />
      <Hooks/>
      <hr />
      <br />
      <UseEffect/>
      <hr />
      <br />
      <CleanupFunction/>
      <hr />
      <br />
      <AddGlobalEvent/>
      <hr />
      <br />
      <CallApi/>
      <hr />
      <br />
      <UseObserver/>
      <hr />
      <br />
      <UseInterval/>
      <hr />
      <br />
      <SelectArray/>
    </div>
  )
}

export default App
