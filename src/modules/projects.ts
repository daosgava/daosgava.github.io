import { PROJECTS } from "../data/projects";

const handleClickLink = (e: Event) => {
  e.preventDefault();
  const link = e.target as HTMLElement;
  const clickedProject = link.getAttribute("data-project-name");
  const projectSelected = PROJECTS.find((project) => project.name === clickedProject);


};

const initializeProjectLinks = () => {
  const links = document.querySelectorAll(".project-link");
  links.forEach((link) => link.addEventListener("click", handleClickLink));
};

const initializeProjects = () => {
  initializeProjectLinks();
};

const projectMarkup = `
  <section id="projects" class="section-container">
    <h2 class="subtitle">Projects<hr></h2>
    <div class="projects-content">
      <div class="menu">
        <ul>
          ${PROJECTS.map(
            (project) => `
              <li><a href="#" class="project-link" data-project-name="${project.name}">${project.name}</a> <hr></li>
              `,
          ).join("")}
        </ul>
     </div>
     <div class="project">

     <div>
    </div>
  </section>
`;

export { projectMarkup, initializeProjects };
