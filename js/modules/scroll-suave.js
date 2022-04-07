//funcao de scroll suave

export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );
  //adiciona o scrol suave com a propriedade scrollIntoView
  function scrollTosection(event) {
    event.preventDefault(); //previnir o evento
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const topo =  section.offsetTop
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    // })
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollTosection);
  });
}
