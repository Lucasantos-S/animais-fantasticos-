export default class Accordion {
  constructor(list) {
    this.accordionlist = document.querySelectorAll(list);
    this.activeClass = "ativo";
  }

  ToggleAcordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  //adicionar o event ao acordion
  addAcordionEvent() {
    this.accordionlist.forEach((item) => {
      item.addEventListener("click", () => this.ToggleAcordion(item));
    });
  }

  //iniciar funcao
  init() {
    if (this.accordionlist.length) {
      //ativar o primeiro item
      this.ToggleAcordion(this.accordionlist[0]);
      this.addAcordionEvent();
    }
  }
}
