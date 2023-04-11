import {addClassHeader} from "./modules/addClassToHeader.js";
import {showSubmenu} from "./modules/showSubmenu.js";
import {preloader} from "./modules/preloader.js";


window.addEventListener('load', () => {
  preloader()
  addClassHeader()
  showSubmenu(document.querySelectorAll('.submenu-questions'));
});
