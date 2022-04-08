import outsideClick from"./outsideclick.js";

export default function initDropdownMenu() {}

const dropownMenu = document.querySelectorAll("[data-dropdown");

function handleClick(event) {
  event.preventDefault();
  this.classList.add("ativo");
  outsideClick(this, ["touchstart", "click"], () => {
    this.classList.remove("ativo");
  });
}
dropownMenu.forEach((menu) => {
  ["touchstart", "click"].forEach((userEvent) => {
    menu.addEventListener(userEvent, handleClick);
  });
})
