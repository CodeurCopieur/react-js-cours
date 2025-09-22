
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
import UseMemo from './lessons/12.useMemo/Container'
import UseReducer from './lessons/13.useReducer/Container'
import HookPersonnalisé from './lessons/14.Hook-personnalisé/Container'
import CSSModules from './lessons/15.CSS-Modules/Container'

function App() {

  return (
    <div className="main-content">
      <CSSModules/>
      <hr />
      <br />
      <hr />
      <br />  
      <HookPersonnalisé/>
      <hr />
      <br />
      <hr />
      <br />  
      <UseReducer/>
      <hr />
      <br />
      <hr />
      <br />  
      <UseMemo/>
      <hr />
      <br />
      <hr />
      <br />  
      <MemoUseCallback/>
      <hr />
      <br />
      <hr />
      <br />  
      <PropsChildren/>
      <hr />
      <br />
      <hr />
      <br />  
      <SelectArray/>
      <hr />
      <br />
      <hr />
      <br />  
      <UseInterval/>
      <hr />
      <br />
      <hr />
      <br />  
      <UseObserver/>
      <hr />
      <br />
      <hr />
      <br />  
      <CallApi/>
      <hr />
      <br />
      <hr />
      <br />  
      <AddGlobalEvent/>
      <hr />
      <br />
      <hr />
      <br />  
      <CleanupFunction/>
      <hr />
      <br />
      <hr />
      <br />  
      <UseEffect/>
      <hr />
      <br />
      <hr />
      <br />  
      <Hooks/>
      <hr />
      <br />
      <hr />
      <br />  
      <Fragments/>
    </div>
  )
}

export default App
