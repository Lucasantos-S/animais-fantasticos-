export default class initTabNav {
  constructor(menu, contend) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(contend);
    this.activeClass = "ativo";
  }

  //funçao que incluir o index da imagens ao section das descrição dos animais
  activeTab(index) {
    //esse forEach serve para trazer a lista da section remover uma o ativo quando clicar em outra imagem
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    //pega o index da imagens e atribui na section e adiciona a class no HTML
    this.tabContent[index].classList.add(
      this.activeClass,
      this.tabContent[index].dataset.anime
    );
  }

  //adiciona o evento de click nas imagens e passa o index para a função activeTab()
  addtabNavElement() {
    this.tabMenu.forEach((links, index) => {
      links.addEventListener("click", () => this.activeTab(index));
    });
  }

  //verificar se e valido, se sim ele executa todo o codigo abaixo
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addtabNavElement();
    }
  }
}
