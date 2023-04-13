function novaFrase() {
    fetch('https://api.kanye.rest/')
      .then(response => response.text())
      .then(textJson => {
        document.getElementById('frase').innerHTML = JSON.parse(textJson).quote;
        localStorage.setItem("frase", JSON.parse(textJson).quote);
      });
}

getLocalStorage();

function getLocalStorage(){
    if (localStorage.getItem("nome") != null) {
        nome.innerHTML =  localStorage.getItem("nome");
        imagem.src = localStorage.getItem("imagem");
        especie.innerHTML = localStorage.getItem("especie");
        tipo.innerHTML = localStorage.getItem("tipo");
        genero.innerHTML = localStorage.getItem("genero");
        episodio.href = localStorage.getItem("episodio");
    }
    if (localStorage.getItem("frase") != null) {
      document.getElementById('frase').innerHTML = localStorage.getItem("frase");
    }
    if (localStorage.getItem("aluno") != null) {
      document.getElementById('aluno').innerHTML = localStorage.getItem("aluno");
    }
}

async function novoPersonagem() {

  try {

      const response = await fetch('https://rickandmortyapi.com/api');
      
      imagem.src = 'loading.gif';

      const data = await response.json();
      const page = Math.floor(Math.random() * 42);
      const charactersJson = await fetch(data.characters+'/?page='+page);
      const characters = await charactersJson.json();
      const numero = Math.floor(Math.random() * characters.results.length);
      const character = characters.results[numero];
      nome.innerHTML = character.name;
      imagem.src = character.image;
      especie.innerHTML = character.species;
      tipo.innerHTML = character.type;
      genero.innerHTML = character.gender;
      episodio.href = character.episode[0];
      localStorage.setItem("nome", character.name);
      localStorage.setItem("especie", character.species);
      localStorage.setItem("imagem", character.image);
      localStorage.setItem("tipo", character.type);
      localStorage.setItem("genero", character.gender);
      localStorage.setItem("episodio", character.episode[0]);
  } catch (error) {
    console.error(error);
  }
}

function removeLocalStorage() {
    localStorage.removeItem("nome");
    localStorage.removeItem("imagem");
    localStorage.removeItem("especie");
    localStorage.removeItem("tipo");
    localStorage.removeItem("genero");
    localStorage.removeItem("episodio");
    localStorage.removeItem("frase");
    localStorage.removeItem("aluno");
}