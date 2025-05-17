// Fonction pour récupérer les utilisateurs
const fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  };
  
  // Utilisation de la fonction
  fetchUsers().then(users => {
    console.log(users); // Affiche la liste des utilisateurs
  });