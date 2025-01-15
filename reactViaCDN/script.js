const App = () => {
    return (
        <div>
         <h2 className="titre">Salut 3</h2>
        </div>
     )
}

// React.createElement("div", null, React.createElement("h2", { className: "titre"}, "Salut"));

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />)