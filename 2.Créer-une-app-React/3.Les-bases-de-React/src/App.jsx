import Container from "./lessons/1.Le-JSX/Container";
import Composant from "./lessons/2.Premier-composant/Container";
import Event from "./lessons/3.Utiliser-des-évènements/Container";
import State from "./lessons/4.Le-state/Container";
import Props from "./lessons/5.Les-props/Container";
import CSS from "./lessons/6.Utiliser-du-CSS/Container";
import List from "./lessons/7.Créer-une-liste/Container";
import Image from "./lessons/8.Utiliser-des-images/Container";
import Condition from "./lessons/9.Rendu-conditionnel-if/Container";
import Ternaire from "./lessons/10.Opérateur-ternaire/Container";
import ShortCircuit from "./lessons/11.Short-circuit/Container";
import Toggle from "./lessons/12.Toggle-une-classe-ou-du-CSS/Container";
import UseRefHook from "./lessons/13.useRef/Container";


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
      <hr />
      <CSS />
      <hr />
      <List />
      <hr />
      <Image />
      <hr />
      <Condition />
      <hr />
      <Ternaire />
      <hr />
      <ShortCircuit />
      <hr />
      <Toggle />
      <hr />
      <UseRefHook />
    </div>
  )
}

export default App
