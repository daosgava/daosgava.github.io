import "./css/reset.css";
import "./css/defaults.css";
import "./css/global.css";
import "./css/modeSwitch.css";
import "./css/menu.css";
import "./css/home.css";
import "./css/about.css";
import "./css/experience.css";
import "./css/projects.css";
import "./css/footer.css";
import "./css/contact.css"

import { initializeSwitchMode } from "./modules/modeSwitch";
import { initializeCursor } from "./modules/specialCursor";
import { initializeMenuItems } from "./modules/menu";

import { homeMarkup } from "./modules/home";
import { headerMarkup } from "./modules/header";
import { aboutMarkup } from "./modules/about";
import { experienceMarkup, initializeJobsCarousel } from "./modules/experience";
import { initializeProjects, projectMarkup } from "./modules/projects";
import { contactMarkup } from "./modules/contact";
import { footerMarkup } from "./modules/footer";

const appElement = document.querySelector<HTMLDivElement>("#app");

appElement!.innerHTML = `
  ${headerMarkup}

  ${homeMarkup}

  ${aboutMarkup}

  ${experienceMarkup}

  ${projectMarkup}

  ${contactMarkup}

  ${footerMarkup}
`;

const initializePage = () => {
  initializeSwitchMode();
  initializeMenuItems();
  initializeCursor();
  initializeJobsCarousel();
  initializeProjects();
};

initializePage();
