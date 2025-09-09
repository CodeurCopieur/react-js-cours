
import Fragments from './lessons/1.Les-fragments/Container'
import Hooks from './lessons/2.La-règle-des-hooks/Container'
import UseEffect from './lessons/3.Le-hook-use-effect/Container'
import CleanupFunction from './lessons/4.Cleanup-function/Container'
import AddGlobalEvent from './lessons/5.Ajouter-un-évènement-global/Container'
import CallApi from './lessons/6.Appeler-une-API/Container'
import UseObserver from './lessons/7.Utiliser-un-observateur/Container'
import UseInterval from './lessons/8.Utiliser-setInterval/Container'      
import SelectArray from './lessons/9.Sélectionner-un-tableau-déléments/Container'
import PropsChildren from './lessons/10.Comprendre-props-children/Container'
import MemoUseCallback from './lessons/11.Memo-et-useCallback/Container'
function App() {

  return (
    <div className="main-content">
      <hr />
      <br />  
      <MemoUseCallback/>
      <hr />
      <br />
      <PropsChildren/>
      <hr />
      <br />
      <SelectArray/>
      <hr />
      <br />
      <UseInterval/>
      <hr />
      <br />
      <UseObserver/>
      <hr />
      <br />
      <CallApi/>
      <hr />
      <br />
      <AddGlobalEvent/>
      <hr />
      <br />
      <CleanupFunction/>
      <hr />
      <br />
      <UseEffect/>
      <hr />
      <br />
      <Hooks/>
      <hr />
      <br />
      <Fragments/>
    </div>
  )
}

export default App
