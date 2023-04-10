import {addClassHeader} from "./modules/addClassToHeader.js";
import {showSubmenu} from "./modules/showSubmenu.js";


window.addEventListener('load', () => {
  addClassHeader()
  showSubmenu(document.querySelectorAll('.submenu-questions'));
});
