import "./css/reset.css";
import "./css/defaults.css";
import "./css/style.css";
import "./css/modeSwitch.css";
import "./css/menu.css";

import { initializeSwitchMode } from "./modules/modeSwitch";
import { initializeCursor, specialCursorMarkup } from "./modules/specialCursor";
import { initializeMenuItems, menuMarkup } from "./modules/menu";
import { LOGOS } from "./modules/techoLogos";

const appElement = document.querySelector<HTMLDivElement>("#app");

const headerMarkup = `
  <header class="header">
    ${menuMarkup}
  </header>
`;

const homeMarkup = `
  <section id="home" class="section-container">
    <h1 class="title">Daniel Garcia</h1>
    <h2 class="subtitle">Software Developer</h2>
    ${specialCursorMarkup}
  </section>
`;

const aboutMarkup = `
  <section id="about" class="section-container">
    <h2 class="subtitle">About <hr></h2>

    <div class="about-content">
      <h3 class="highlight">
        Software Developer with nearly a decade of professional experience in
        building, scaling, and deploying web applications.
      </h3>
      <ul>
        <li>
          Proficient in a wide range of modern technologies, including Cloud Native solutions.
        </li>
        <li>
          Fluent in Spanish (native) and English (C1, IELTS certified).
        </li>
        <li>
          Driven by challenges, solving complex problems, and delivering effective solutions.
        </li>
      </ul>
    </div>
    <div class="tech-stack">
      <p class="tech-stack-title">
        Technology Stack
      </p>
      <div class="tech-logos">
        ${LOGOS.map((logo) => `<div class="logo"><img src="${logo.url}" alt="${logo.name}"/><p>${logo.name}</p></div>`).join(" ")}
      </div>
    </div>
    <div class="more-links">
      <div class="link">
        <a href="https://github.com/daosgava" target="_blank">Explore Github ⬈</a>
        <hr>
      </div>
      <div class="link">
        <a href="https://www.linkedin.com/in/danielgarciavargas/" target="_blank">LinkedIn ⬈</a>
        <hr>
      </div>
    </div>
  </section>
`;

const experienceMarkup = `
  <section id="experience" class="section-container">
    <h2 class="subtitle">Experience</h2>
  </section>
`;

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
