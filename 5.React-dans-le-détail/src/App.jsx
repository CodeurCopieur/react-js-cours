
import Fragments from './lessons/1.Les-fragments/Container'
import Hooks from './lessons/2.La-règle-des-hooks/Container'
import UseEffect from './lessons/3.Le-hook-use-effect/Container'
import CleanupFunction from './lessons/4.Cleanup-function/Container'

function App() {

  return (
    <div className="main-content">
      <Fragments/>
      <hr />
      <Hooks/>
      <hr />
      <UseEffect/>
      <hr />
      <CleanupFunction/>
    </div>
  )
}

export default App
