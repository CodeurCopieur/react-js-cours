import ModalButton from './lessons/1.Créer-une-fenêtre-modale-avec-un-portal/ModalButton'
import Tabs from './lessons/2.Coder-des-onglets/Tabs'
import Navbar from './lessons/3.Coder-une-navbar/NavBar'
import Validation from './lessons/4.Validation/Validation'

function App() {

  return (
    <div className="min-h-screen bg-slate-700 pt-10">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><h1 style={{color: 'white'}}>Fênetres Modales</h1>
      <hr />
      <br />
      <ModalButton />
      <br />
      <br />
      <br />
      <h1 style={{color: 'white'}}>Coder des onglets</h1>
      <hr />
      <br />
      <Tabs />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{color: 'white'}}>Formualire de Validation</h1>
      <hr />
      <br />
      <Validation />
    </div>
  )
}

export default App
