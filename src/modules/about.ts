import { LOGOS } from "./techoLogos";

const aboutMarkup = `
  <section id="about" class="section-container">
    <h2 class="subtitle">About me<hr></h2>

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
          Driven by challenges, solving complex problems, and delivering effective solutions.
        </li>
        <li>
          Fluent in Spanish (native) and English (C1, IELTS certified).
        </li>
      </ul>
    </div>
    <p class="tech-stack-title">
      Technology Stack:
    </p>
    <div class="tech-stack">
      <div class="tech-logos">
        ${LOGOS.slice(0, 11)
          .map(
            (logo) =>
              `<div class="logo"><img src="${logo.url}" alt="${logo.name}"/><p>${logo.name}</p></div>`,
          )
          .join(" ")}
        <em>...among others</em>
      </div>
    </div>
    <div class="more-links">
      <div class="link">
        <a href="https://github.com/daosgava" target="_blank">Explore Github <span class="external-icon">→</span></a>
        <hr>
      </div>
      <div class="link">
        <a href="https://www.linkedin.com/in/danielgarciavargas/" target="_blank">LinkedIn <span class="external-icon">→</span></a>
        <hr>
      </div>
    </div>
  </section>
`;

export { aboutMarkup };
