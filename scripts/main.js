function getCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        var characterList = document.getElementById("character-list");
  
        data.results.forEach(character => {
          var listItem = document.createElement("li");
          listItem.innerHTML = `
            <strong>${character.name}</strong> - ${character.status}
          `;
          characterList.appendChild(listItem);
        });
      })
      .catch(error => {
        var characterList = document.getElementById("character-list");
  
        characterList.innerHTML = `
          <li>Erro ao obter personagens:</li>
          <li>${error.message}</li>
        `;
      });
  }
  