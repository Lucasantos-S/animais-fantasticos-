export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  const onMouseMove = {
    handleEvent(event) {
      this.tooltiopBox.style.top = `${event.pageY + 20}px`;
      this.tooltiopBox.style.left = `${event.pageX + 20}px`;
    },
  };
  const onMouseLeave = {
    handleEvent() {
      this.tooltiopBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function criarToolTipBox(element) {
    const tooltiopBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltiopBox.classList.add("tooltip");
    tooltiopBox.innerHTML = text;
    document.body.appendChild(tooltiopBox);
    return tooltiopBox;
  }

  function onMouseOver(event) {
    const tooltiopBox = criarToolTipBox(this);
    tooltiopBox.style.top = `${event.pageY}px`;
    tooltiopBox.style.left = `${event.pageX}px`;

    onMouseMove.tooltiopBox = tooltiopBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltiopBox = tooltiopBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
