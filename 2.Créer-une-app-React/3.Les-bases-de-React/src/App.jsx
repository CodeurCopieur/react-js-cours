import Container from "./lessons/1.Le-JSX/Container";
import Composant from "./lessons/2.Premier-composant/Container";
import Event from "./lessons/3.Utiliser-des-évènements/Container";
import State from "./lessons/4.Le-state/Container";
import Props from "./lessons/5.Les-props/Container";

function App() {

  return (
    <div className="main-content">
      <Container />
      <hr />
      <Composant />
      <hr />
      <Event />
      <hr />
      <State />
      <hr />
      <Props />
    </div>
  )
}

export default App
