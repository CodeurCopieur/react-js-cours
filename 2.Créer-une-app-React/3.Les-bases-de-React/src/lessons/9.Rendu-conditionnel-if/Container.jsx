export default function Container() {
  const isLoggedIn = true;
  let content;
  
  if (isLoggedIn) {
    content = <h2>Bienvenue sur la page</h2>;
  } else {
    content = <h2>Veuillez vous connecter</h2>;
  }

  return (
    <div>
      <h1>Rendu conditionnel</h1>
      {content}
    </div>
  );
}
// methode 1 : avec if else
// export default function Container() {
//   const isLoggedIn = true;

//   if (isLoggedIn) {
//     return (
//       <div>
//         <h1>Bienvenue sur la page</h1>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Veuillez vous connecter</h1>
//       </div>
//     );
//   }
// }
