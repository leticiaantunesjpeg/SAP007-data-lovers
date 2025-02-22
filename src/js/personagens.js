import data from "../data/ghibli/ghibli.js";
import {
  filtroDataGênero,
  filtroDataEspécie,
  ordenaçãoDataPersonagens,
  pesquisaDataNome,
} from "./data.js";

const containerAnimes = document.getElementById("containerCardItem");

let filmesData = data.films;

function defineQuantidadeCards(quantidade) {
  const quantidadeCards = document.querySelector(".quantidadeCards");
  quantidadeCards.textContent = "Total: " + quantidade;
}

let characters = [];

function extraindoPersonagens(filmes) {
  filmes.map((film) => {
    const people = film.people;
    for (let j = 0; j < people.length; j++) {
      characters.push(people[j]);
    }
  });
}

extraindoPersonagens(filmesData);

defineQuantidadeCards(characters.length);

function mostrarPersonagens(personagens) {
  for (let j = 0; j < personagens.length; j++) {
    const cardAnime = document.createElement("article");
    cardAnime.className = "container-card-individual";
    cardAnime.innerHTML = `
    <p class="informação"> ${personagens[j].name} </p>
    <img src= '${personagens[j].img}' class="imagem-poster"></img><br>
    <p class="informação">Idade: ${personagens[j].age}</p>
    <p class="informação">Gênero: ${personagens[j].gender}</p>
    <p class="informação">Espécie: ${personagens[j].specie}</p>
    `;
    containerAnimes.appendChild(cardAnime);
  }
}

mostrarPersonagens(characters);

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});

document.getElementById("filtroGeneroItem").addEventListener("change", () => {
  let gênero = document.querySelector(".filtro-genero");
  setTimeout(() => (gênero.selectedIndex = 0), 3000);
  let personagensFiltrados = filtroDataGênero(characters, gênero.value);
  containerAnimes.innerHTML = "";
  mostrarPersonagens(personagensFiltrados);
  defineQuantidadeCards(personagensFiltrados.length);
});

document.getElementById("filtroEspecieItem").addEventListener("change", () => {
  let espécie = document.querySelector(".filtro-especie");
  setTimeout(() => (espécie.selectedIndex = 0), 3000);
  let personagensFiltrados = filtroDataEspécie(characters, espécie.value);
  containerAnimes.innerHTML = "";
  mostrarPersonagens(personagensFiltrados);
  defineQuantidadeCards(personagensFiltrados.length);
});

document
  .getElementById("ordenacaoAlfabeticaItem")
  .addEventListener("change", () => {
    let nome = document.querySelector(".ordenacao-alfabetica");
    setTimeout(() => (nome.selectedIndex = 0), 3000);
    let nomesOrdenados = ordenaçãoDataPersonagens(characters, nome.value);
    containerAnimes.innerHTML = "";
    mostrarPersonagens(nomesOrdenados);
    defineQuantidadeCards(nomesOrdenados.length);
  });

document
  .getElementById("pesquisaConteinerItem")
  .addEventListener("keyup", () => {
    let nome = document.querySelector(".pesquisa-item");
    setTimeout(() => (nome.selectedIndex = 0), 3000);
    let pesquisaDeNome = pesquisaDataNome(characters, nome.value);
    containerAnimes.innerHTML = "";
    mostrarPersonagens(pesquisaDeNome);
    defineQuantidadeCards(pesquisaDeNome.length);
  });
