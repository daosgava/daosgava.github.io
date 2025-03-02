import "./css/style.css";
import { initializeSwitchMode } from "./modules/nodeSwitch";
import { initializeCursor, specialCursorMarkup } from "./modules/specialCursor";
import { initializeMenuItems, menuMarkup } from "./modules/menu";

const appElement = document.querySelector<HTMLDivElement>("#app");

appElement!.innerHTML = `
  <header class="header">
    ${menuMarkup}
  </header>

  <section id="home" class="section-container">
    <h1 class="title">Daniel Garcia</h1>
    <h2 class="subtitle">Software Developer</h2>
    ${specialCursorMarkup}
  </section>

  <section id="profile" class="section-container">
    <h2 class="subtitle">Profile</h2>
    <p>
      Software Developer with nearly a decade of professional experience in
      building, scaling, and deploying web applications. Proficient in a wide
      range of modern technologies, including JavaScript, TypeScript,
      React.js, Node.js, and Cloud Native solutions such as Docker,
      Kubernetes, and AWS. My career is built on accountability, consistency,
      and the capacity to tackle complex challenges.
    </p>
  </section>

  <section id="experience" class="section-container">
    <h2 class="subtitle">Experience</h2>
  </section>
`;

const initializePage = () => {
  initializeSwitchMode();
  initializeMenuItems();
  initializeCursor();
};

initializePage();
