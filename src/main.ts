import "./css/reset.css";
import "./css/defaults.css";
import "./css/style.css";
import "./css/modeSwitch.css";
import "./css/menu.css";
import "./css/home.css";
import "./css/about.css";
import "./css/experience.css";

import { initializeSwitchMode } from "./modules/modeSwitch";
import { initializeCursor } from "./modules/specialCursor";
import { initializeMenuItems } from "./modules/menu";

import { homeMarkup } from "./modules/home";
import { headerMarkup } from "./modules/header";
import { aboutMarkup } from "./modules/about";
import { experienceMarkup } from "./modules/experience";

const appElement = document.querySelector<HTMLDivElement>("#app");

appElement!.innerHTML = `
  ${headerMarkup}

  ${homeMarkup}

  ${aboutMarkup}

  ${experienceMarkup}
`;

const initializePage = () => {
  initializeSwitchMode();
  initializeMenuItems();
  initializeCursor();
};

initializePage();
