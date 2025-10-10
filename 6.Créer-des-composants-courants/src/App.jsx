import ModalButton from './lessons/1.Créer-une-fenêtre-modale-avec-un-portal/ModalButton'
import Tabs from './lessons/2.Coder-des-onglets/Tabs'
import Navbar from './lessons/3.Coder-une-navbar/NavBar'

function App() {

  return (
    <div className="min-h-screen bg-slate-700 pt-10">
      <Navbar />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <hr />
      <br />
      <br /><h1 style={{color: 'white'}}>Fênetres Modales</h1>
      <hr />
      <br />
      <ModalButton />
      <hr />
      <br />
      <hr />
      <br />
      <h1 style={{color: 'white'}}>Coder des onglets</h1>
      <hr />
      <br />
      <Tabs />
    </div>
  )
}

export default App
