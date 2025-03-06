import { JOBS } from "../data/jobs";
import { LOGOS } from "../modules/techoLogos";
import { createState } from "../utils/stateManager";

const isSmallScreen = window.matchMedia(
  "only screen and (max-width: 992px)",
).matches;
const windowSpan = isSmallScreen ? 1 : 2;

const renderPageCounter = (current: number) => {
  const numOfPages = Math.ceil(JOBS.length / windowSpan);
  const currentPage = Math.floor((current / JOBS.length) * numOfPages);
  const pageCounter = document.querySelector(".page-counter");
  pageCounter!.innerHTML = `${currentPage} of ${numOfPages}`;
};

const renderJobs = (start: number, end: number) => {
  const jobsContainer = document.querySelector(".jobs-container");
  jobsContainer?.classList.add("transparent");
  renderPageCounter(end);

  setTimeout(() => {
    jobsContainer?.classList.remove("transparent");
    const jobs = JOBS.slice(start, end)
      .map(
        (job) => `
      <div class="job">
        <div class="job-title">
          <h2>${job.title} <small>at</small> <a href="${job.company.url}" target="_blank"><em>${job.company.name}</em></a></h2>
          <em>${job.duration}</em>
        </div>
        <div class="description-container">
          <p>${job.description}</p>
          ${job.additional_info ? `<p><strong>${job.additional_info}</strong></p>` : ""}
          <ul>
            ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
          </ul>
        </div>
        <p><strong>Technology Stack:</strong> </p>
        <div class="logos-container">${technologiesLogos(job.technologies)}</div>
      </div>
    `,
      )
      .join("");
    jobsContainer!.innerHTML = jobs;
  }, 200);
};

const toggleControls = (currentIndex: number) => {
  const previousButton = document.querySelector(".jobs .previous");
  const nextButton = document.querySelector(".jobs .next");
  nextButton?.classList.remove("transparent");
  previousButton?.classList.remove("transparent");

  if (currentIndex + windowSpan >= JOBS.length) {
    nextButton?.classList.add("transparent");
  }

  if (currentIndex === 0) {
    previousButton?.classList.add("transparent");
  }
};

type HandleClickControlProps = {
  indexState: {
    getState: () => number;
    setState: (newVal: number) => void;
  };
  operation: "next" | "previous";
};

const handleClickControl = ({
  indexState,
  operation,
}: HandleClickControlProps) => {
  const value = indexState.getState();

  if (operation === "next" && value + windowSpan >= JOBS.length) return;
  if (operation === "previous" && value === 0) return;

  const newIndex =
    operation === "next" ? value + windowSpan : value - windowSpan;
  indexState.setState(newIndex);
  renderJobs(newIndex, newIndex + windowSpan);
  toggleControls(newIndex);
};

const initializeJobsCarousel = () => {
  const { getState, setState } = createState(0);

  renderJobs(0, windowSpan);
  toggleControls(0);

  const previousButton = document.querySelector(".jobs .previous");
  previousButton?.addEventListener("click", (e) => {
    e.preventDefault();
    handleClickControl({
      indexState: { getState, setState },
      operation: "previous",
    });
  });

  const nextButton = document.querySelector(".jobs .next");
  nextButton?.addEventListener("click", (e) => {
    e.preventDefault();
    handleClickControl({
      indexState: { getState, setState },
      operation: "next",
    });
  });
};

const technologiesLogos = (technologies: string[]) => {
  return technologies
    .map((techName) => {
      const logo = LOGOS.find((logo) => logo.name === techName);

      return `
        <div class="logo">
          ${
            logo?.name
              ? `<img class= "logo" src = "${logo?.url}" alt = "${logo?.name}" /> `
              : ""
          } <p>${techName}</p>
        </div>
      `;
    })
    .join("");
};

const experienceMarkup = `
  <section id="experience" class="section-container">
    <h2 class="subtitle">Experience<hr></h2>
    <div class="jobs">
      <a class="controls previous" href="#">⬅︎</a>
      <div class="jobs-container"></div>
      <a class="controls next" href="#">⬅︎</a>
    </div>
    <div class="page-counter"></div>
  </section>
`;

export { experienceMarkup, initializeJobsCarousel };
