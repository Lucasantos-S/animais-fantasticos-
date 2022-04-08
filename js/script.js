import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import fecthAnimais from "./modules/fetch-animais.js";
import FecthBiticoin from "./modules/fetch-bitcoin.js";
import animationScroll from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
const tabnav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabnav.init()
animationScroll();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
fecthAnimais();
FecthBiticoin();
