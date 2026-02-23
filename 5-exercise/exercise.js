// Objective: Practice array manipulation using functional patterns (filter, map, reduce, and destructuring) by processing real data from an API.
// Filter: Only include users whose id is an even number.
// Transform: Create a new array of objects containing only the id, name, and the city (extracted from the nested address object).
// Add: Insert a "Guest User" at the beginning of the list without mutating the original result.
// Statistics: Calculate the total number of characters in all usernames combined using reduce.

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(response => response.json())
  .then(users => {
      // YOUR CODE STARTS HERE

      console.log("Usuaris originals:", users);

      console.log("--- Processed Users ---");

      // 1. Filtrar IDs parells
      const filtered = users.filter(user => user.id % 2 === 0);
      console.log("Després del filter (IDs parells):", filtered);

      // 2. Transformar a objectes { id, name, city }
      const cleaned = filtered.map(({ id, name, address }) => ({
          id,
          name,
          city: address.city
      }));
      console.log("Després del map (objectes nets):", cleaned);

      // 3. Afegir "Guest User" al principi sense modificar l'array original
      const finalUsers = [
          { id: 0, name: "Guest User", city: "Unknown" },
          ...cleaned
      ];
      console.log("Resultat final amb Guest User:", finalUsers);

      console.log("--- Statistics ---");

      // 4. Calcular el total de caràcters de tots els noms
      const totalCharacters = finalUsers.reduce(
          (total, user) => total + user.name.length,
          0
      );

      console.log("Total characters in names:", totalCharacters);
  });