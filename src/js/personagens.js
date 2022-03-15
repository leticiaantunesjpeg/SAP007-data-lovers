import data from "../data/ghibli/ghibli.js";
import {
  filtroDataGênero,
  filtroDataEspécie,
  ordenaçãoDataPersonagens,
  pesquisaDataNome,
} from "./data.js";

const containerAnimes = document.getElementById("containerCardItem");

let filmesData = data.films;

let characters = [];

function extraindoPersonagens(filmes){
  filmes.map((film) => {
    const people = film.people;
    for (let j = 0; j < people.length; j++) {
      characters.push(people[j]);
    }
  });}

  extraindoPersonagens(filmesData);


function mostrarPersonagens(personagens) {
  for (let j = 0; j < personagens.length; j++) {
    const cardAnime = document.createElement("section");
    cardAnime.className = "container-card-individual";
    cardAnime.innerHTML = `
    <div>
    <p class="informação"> ${personagens[j].name} </p>
    <img src= '${personagens[j].img}' class="imagem-poster"></img><br>
      </div>
        
      <div>
      <div class="informação">Idade: ${personagens[j].age}</div>
      </div>
      <div class="informação">Gênero: ${personagens[j].gender}</div>
      <div class="informação">Espécie: ${personagens[j].specie}</div>
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
  setTimeout(()=> gênero.selectedIndex=0,3000);
  let personagensFiltrados = filtroDataGênero(characters, gênero.value);
  containerAnimes.innerHTML = "";
  mostrarPersonagens(personagensFiltrados);
});

document.getElementById("filtroEspecieItem").addEventListener("change", () => {
  let espécie = document.querySelector(".filtro-especie");
  setTimeout(()=> espécie.selectedIndex=0,3000);
  let personagensFiltrados = filtroDataEspécie(characters, espécie.value);
  containerAnimes.innerHTML = "";
  mostrarPersonagens(personagensFiltrados);
});

document
  .getElementById("ordenacaoAlfabeticaItem")
  .addEventListener("change", () => {
    let nome = document.querySelector(".ordenacao-alfabetica");
    setTimeout(()=> nome.selectedIndex=0,3000);
    let nomesOrdenados = ordenaçãoDataPersonagens(characters, nome.value);
    containerAnimes.innerHTML = "";
    mostrarPersonagens(nomesOrdenados);
  });

document
  .getElementById("pesquisaConteinerItem")
  .addEventListener("keyup", () => {
    let nome = document.querySelector(".pesquisa-item");
    setTimeout(()=> nome.selectedIndex=0,3000);
    let pesquisaDeNome = pesquisaDataNome(characters, nome.value);
    containerAnimes.innerHTML = "";
    mostrarPersonagens(pesquisaDeNome);
  });
