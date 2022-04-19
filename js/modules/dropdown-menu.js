import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(menu) {
    this.dropownMenu = document.querySelectorAll(menu);
    this.activeClass = 'ativo'
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  //ativa o dropdrownmenu e adiciona
  //a função que observa o click fora dele

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = this.event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, ["touchstart", "click"], () => {
      element.classList.remove(this.activeClass);
    });
  }

  //adiciona os eventos no menu e passa a funcção de ativar 
  addDropdownMenuEvent() {
    this.dropownMenu.forEach((menu) => {
      ["touchstart", "click"].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropownMenu.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
