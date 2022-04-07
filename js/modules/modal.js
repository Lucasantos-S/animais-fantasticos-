export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  //toggle vai adicionar ou tirar a classe ativo do modal

  function toogleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  //fechar quando ocorrer o click fora do this containerModal

  function clickForaModal(event) {
    console.log(this);
    console.log(this);
    if (event.target === this) toogleModal(event);
  }
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toogleModal);
    botaoFechar.addEventListener("click", toogleModal);
    containerModal.addEventListener("click", clickForaModal);
  }
}
