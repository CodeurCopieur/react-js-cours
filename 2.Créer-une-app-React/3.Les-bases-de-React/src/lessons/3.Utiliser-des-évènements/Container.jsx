export default function Container() {

  const handleClick = (message) => {
    alert(message)
  }
  const handleClick2 = (e, message) => {
    alert(message)
    console.log(e)
  }

  return (
    <div>
      <h1>Utiliser des évènements</h1>
      {/* On peut ajouter un évènement directement dans le JSX avec une fonction anonyme, mais ce n'est pas pratique s'il y a beaucoup de code */}
      <button onClick={() => alert("Hello")}>Click me 1</button>
      {/* Mauvaise pratique, peu maintenable */}
      <button onClick={(e) => {
        alert("Hello")
        console.log("Hello")
        console.log("Hello")
        console.log("Hello")
        console.log("Hello")
        console.log("Hello")
        console.log("Hello")
        }}>Click me 2</button>

      {/* On lui préfère en général ceci */}
      <button onClick={handleClick}>Click me 3</button>

      {/* Attention, si on veut passer un argument, il faut obligatoirement utiliser une fonction anonyme */}
      <button onClick={() => handleClick("Hello codwerk")}>Click me 4</button>

      {/* Si on veut l'objet d'évènement ET passer un ou des arguments, on code ceci */}
      <button onClick={(e) => handleClick2(e, "Hello codwerk")}>Click me 5</button>  
    </div>
  )
}
