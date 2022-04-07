import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.toggle("active");
    menuButton.classList.toggle("active");
    outsideClick(menuList, events, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }
  if (menuButton && menuList) {
    events.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
