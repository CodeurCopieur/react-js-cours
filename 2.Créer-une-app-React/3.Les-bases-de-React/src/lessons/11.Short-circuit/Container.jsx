export default function Container() {

  const isLoggedIn = true;

  return (
    <div>
      <h1>Bienvenue sur BooksParadise</h1>
      {isLoggedIn && <p>Vous êtes connecté</p>}
    </div>
  )
}
