import {addClassHeader} from "./modules/addClassToHeader.js";
import {showSubmenu} from "./modules/showSubmenu.js";
import {preloader} from "./modules/preloader.js";
import {initAnimation} from "./modules/initAnimation.js";

window.addEventListener('load', () => {
  preloader()
  initAnimation()
  addClassHeader()
  showSubmenu(document.querySelectorAll('.submenu-questions'));
});
