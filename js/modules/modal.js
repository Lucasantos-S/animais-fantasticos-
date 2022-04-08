export default class initModal {
  constructor(open, exit, container) {
    this.botaoAbrir = document.querySelector(open);
    this.botaoFechar = document.querySelector(exit);
    this.containerModal = document.querySelector(container);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  //toggle vai adicionar ou tirar a classe ativo do modal

  toogleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    console.log(this);
    event.preventDefault();
    this.toogleModal();
  }

  //fechar quando ocorrer o click fora do this containerModal

  clickForaModal(event) {
    if (event.target === this.containerModal) {
      this.toogleModal(event);
    }
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
