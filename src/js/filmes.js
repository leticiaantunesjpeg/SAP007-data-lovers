import data from "../data/ghibli/ghibli.js";
import {
  filtroDataDiretor,
  filtroDataLançamento,
  ordenaçãoDataFilmes,
  pesquisaDataTítulo,
} from "./data.js";

const containerAnimes = document.getElementById("containerCardItem");

let filmesData = data.films;

filmesData.forEach(mostrarFilmes);

function mostrarFilmes(data) {
  const cardAnime = document.createElement("article");
  cardAnime.className = "container-card-individual";
  cardAnime.innerHTML = `
    <p class="informação"> ${data.title} </p>
    <img src= '${data.poster}'></img><br> 
    <p class="informação">Ano de lançamento: ${data.release_date}</p>
    <p class="informação">Diretor: ${data.director}</p>
      `;
  containerAnimes.appendChild(cardAnime);
}

document.getElementById("recarregar").addEventListener("click", () => {
  location.reload();
});

document.getElementById("filtroDiretorItem").addEventListener("change", () => {
  let diretores = document.querySelector(".filtro-diretor");
  setTimeout(()=> diretores.selectedIndex=0,3000);
  let filterItem = filtroDataDiretor(filmesData, diretores.value);
  containerAnimes.innerHTML = "";
  filterItem.forEach(mostrarFilmes);
});

document
  .getElementById("filtroLancamentoItem")
  .addEventListener("change", () => {
    let lançamento = document.querySelector(".filtro-lancamento");
    setTimeout(()=> lançamento.selectedIndex=0,3000);
    let filterItem = filtroDataLançamento(filmesData, lançamento.value);
    containerAnimes.innerHTML = "";
    filterItem.forEach(mostrarFilmes);
  });

document
  .getElementById("ordenacaoAlfabeticaItem")
  .addEventListener("change", () => {
    let título = document.querySelector(".ordenacao-alfabetica");
    setTimeout(()=> título.selectedIndex=0,3000);
    let títulosOrdenados = ordenaçãoDataFilmes(filmesData, título.value);
    containerAnimes.innerHTML = "";
    títulosOrdenados.forEach(mostrarFilmes);
  });

document
  .getElementById("pesquisaConteinerItem")
  .addEventListener("keyup", () => {
    let título = document.querySelector(".pesquisa-item");
    setTimeout(()=> título.selectedIndex=0,3000);
    let pesquisaDeTítulo = pesquisaDataTítulo(filmesData, título.value);
    containerAnimes.innerHTML = "";
    pesquisaDeTítulo.forEach(mostrarFilmes);
  });