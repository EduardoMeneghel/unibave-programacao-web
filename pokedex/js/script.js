let nome = document.getElementById('nome');
let imagem = document.getElementById('imagem');
let carregando = document.getElementById('carregando');

itHasLocalStorage();

function itHasLocalStorage() {
    if (localStorage.getItem("nomePokemom") != null) {
        nome.innerHTML =  localStorage.getItem("nomePokemom");
    }
    if (localStorage.getItem("imagemPokemom") != null) {
        imagem.src = localStorage.getItem("imagemPokemom");
    }
}

function getPokemon() {
    let id = document.getElementById('pokemonId').value;
    fetch('https://pokeapi.co/api/v2/pokemon-form/'+id)
      .then(response => response.json(),carregando.style.display = "")
      .then(data => {
        imagem.src = data.sprites['front_default'];
        nome.innerHTML = data.pokemon['name']
        saveLocalStorage(data.sprites['front_default'],data.pokemon['name']);
      }).finally(function() {
        carregando.style.display = "none";
     }).catch(function() {
        alert('Dado inválido');
      });;
}

function saveLocalStorage(image, name) {
    localStorage.setItem("nomePokemom", name);
    localStorage.setItem("imagemPokemom", image);
}

function removeLocalStorage() {
    localStorage.removeItem("nomePokemom");
    localStorage.removeItem("imagemPokemom");
}