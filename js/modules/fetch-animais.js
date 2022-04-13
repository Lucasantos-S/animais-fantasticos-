import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //cria a div contendo informaçoes com total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animail");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //prencher cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function prencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //anima os numeros em cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  //puxa os animais atras de um arquivo json
  //e cria cada animal ultilizando cratAnimal
  async function criarAnimais() {
    try {
      //fetch espera resposta e trasforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      //Apos trasformação de Json ativa as funções
      //para prencher e animar os numeros
      animaisJSON.forEach((animal) => prencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      numerosGrid.innerHTML = `<span data-numero>Não foi possivel carregar os valores</span>`;
    }
  }

  return criarAnimais();
}
