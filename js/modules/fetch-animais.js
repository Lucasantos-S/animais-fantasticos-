import AnimaNumeros from "./anima-numeros.js";

export default function fectAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animail");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
      animaNumeros.init();
    } catch (erro) {
      const numerosGrid = document.querySelector(".numeros-grid");
      numerosGrid.innerHTML = `<span data-numero>Não foi possivel carregar os valores</span>`;
    }
  }
  
  fetchAnimais("./animaisapi.json");
}
