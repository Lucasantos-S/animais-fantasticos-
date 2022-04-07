export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = "ativo";

  //funçao que incluir o index da imagens ao section das descrição dos animais
  function activeTab(index) {
    //esse forEach serve para trazer a lista da section remover uma o ativo quando clicar em outra imagem
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    //pega o index da imagens e atribui na section e adiciona a class no HTML
    tabContent[index].classList.add(
      activeClass,
      tabContent[index].dataset.anime
    );
  }
  //verificar se e valido, se sim ele executa todo o codigo abaixo
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    //adiciona o evento de click nas imagens e passa o index para a função activeTab()
    tabMenu.forEach((links, index) => {
      links.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
