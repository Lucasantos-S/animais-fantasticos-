export default class initTooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

    //Move a tooltio com base em seus estilos
    //de acordo com a posção do mouse
    onMouseMove(event) {
      this.tooltiopBox.style.top = `${event.pageY + 20}px`;
      if(event.pageX +190 > window.innerWidth) {
        this.tooltiopBox.style.left = `${event.pageX - 190}px`;
      } else {
        this.tooltiopBox.style.left = `${event.pageX + 20}px`;
      }
    }

  //remove a tooltip e os eventos de mousemove e mouseleave
    onMouseLeave(event) {
      this.tooltiopBox.remove();
      event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
      event.currentTarget.removeEventListener("mousemove", this.onMouseMove);
    }

/// cria a tooltip box e coloca no body
  criarToolTipBox(element) {
    const tooltiopBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltiopBox.classList.add("tooltip");
    tooltiopBox.innerHTML = text;
    document.body.appendChild(tooltiopBox);
    this.tooltiopBox = tooltiopBox;
  }

  onMouseOver(event) {
    //cria a tooltip box e coloca em uma pripriedade
    this.criarToolTipBox(event.currentTarget);
    event.currentTarget.addEventListener("mousemove", this.onMouseMove);
    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if(this.tooltips.length) {
      this.addTooltipsEvent()
    }
    return this
  }
 
}
