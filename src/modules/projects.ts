import { PROJECTS } from "../data/projects";

type Project = {
  id: number;
  name: string;
  description: string;
  images: string[];
  url: string | null;
  github: string | null;
  technologies: string[];
};

const highlightLink = (projectId: number) => {
  const link = document.querySelector(`#project-${projectId}`);
  const links = document.querySelectorAll(".projects-menu ul li");
  links.forEach((link) => link.classList.remove("selected"));
  link?.classList.add("selected");
};

const imagesScrollingDetector = () => {
  const imagesContainer =
    document.querySelector<HTMLElement>(".images-container");
  const scrollSign = document.querySelector<HTMLElement>(".scroll-sign");

  scrollSign?.addEventListener("click", (e) => {
    e.preventDefault();
    imagesContainer?.scrollTo(imagesContainer.scrollWidth, 0);
  });

  imagesContainer?.addEventListener("scrollend", (e) => {
    const target = e.target as HTMLElement;
    const window = 200;
    if (
      target.scrollLeft + window >=
      imagesContainer.getBoundingClientRect().width
    ) {
      scrollSign!.classList.add("hidden");
      return;
    }
    scrollSign!.classList.remove("hidden");
  });
};

const renderProject = (project: Project) => {
  const projectContainer = document.querySelector(".project-container");
  const markup = `
    <div class="details">
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <Strong><em>Tech Stack: ${project.technologies.join(" | ")}</em></strong>
      <a href="${project.url || project.github}" target="_blank">${project.url ? "Visit Page" : "Github"}<hr></a>
    </div>
    <div class="images">
      <div class="images-container">
        ${project.images.map((url) => `<img src="${url}" />`).join("")}
      </div>
      <div class="scroll-sign-container">
        ${project.images.length > 1 ? `<a class="scroll-sign">Scroll <span class="arrow">⬅︎</span></a>` : ""}
      </div>
    </div>
  `;

  projectContainer!.innerHTML = markup;
  highlightLink(project.id);
  if (project.images.length > 1) {
    imagesScrollingDetector();
  }
};

const handleClickLink = (e: Event) => {
  e.preventDefault();
  const link = e.target as HTMLElement;
  const clickedProject = link.getAttribute("data-project-id");
  const projectSelected = PROJECTS.find(
    (project) => project.id === Number(clickedProject),
  );
  const projectContainer = document.querySelector(".project-container");
  projectContainer?.classList.add("transparent");
  setTimeout(() => {
    renderProject(projectSelected!);
    projectContainer?.classList.remove("transparent");
  }, 200);
};

const initializeProjectLinks = () => {
  const links = document.querySelectorAll(".project-link");
  links.forEach((link) => link.addEventListener("click", handleClickLink));
};

const initializeProjects = () => {
  renderProject(PROJECTS[0]);
  initializeProjectLinks();
};

const projectMarkup = `
  <section id="projects" class="section-container">
    <h2 class="subtitle">Projects<hr></h2>
    <div class="projects-content">
      <div class="projects-menu">
        <ul>
          ${PROJECTS.map(
            (project) => `
              <li id="project-${project.id}"><a href="#" class="project-link" data-project-id="${project.id}">${project.name}</a> <hr></li>
              `,
          ).join("")}
        </ul>
     </div>
     <div class="project-container"><div>
    </div>
  </section>
`;

export { projectMarkup, initializeProjects };
