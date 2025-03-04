import { JOBS } from "../data/jobs";
import { LOGOS } from "../modules/techoLogos";

const nextButton = (index: number) => {
  if (index < JOBS.length && index % 2 !== 0) {
    console.log(Number(JOBS[index + 2] ? 2 : 1));
    const nextIndex = index + Number(JOBS[index + 2] ? 2 : 1);
    return `<a class="next-job" href="#experience-${nextIndex}"> ➡︎</a>`;
  }

  return "";
};

const previousButton = (index: number) => {
  if (index > 0 && index % 2 === 0) {
    return `<a class="previous-job" href="#experience-${index - 2}">⬅︎</a>`;
  }

  return "";
};

const technologiesLogos = (technologies: string[]) => {
  return technologies.map((techName) => {
    const logo = LOGOS.find((logo) => logo.name === techName);

    return `<div class="logo">
    ${
      logo?.name ? `<img class= "logo" src = "${logo?.url}" alt = "${logo?.name}" /> `: ""
    }  <p>${techName}</p>
    </div>`;
  }).join("");
};

const experienceMarkup = `
  <section id="experience" class="section-container">
    <h2 class="subtitle">Experience<hr></h2>
    <div class="jobs">
      <div class="jobs-container">
        ${JOBS.map(
          (job, index) => `
          <section id="experience-${index}">
            <div class="job">
              <div class="job-title">
                <h2>${job.title} <small>at</small> <a href="${job.company.url}" target="_blank"><em>${job.company.name}</em></a></h2>
                <em>${job.duration}</em>
              </div>
              <p>${job.description}</p>
              ${job.additional_info ? `<p><strong>${job.additional_info}</strong></p>` : ""}
              <ul>
                ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join("")}
              </ul>
              <p><strong>Technologies:</strong> </p>
              <div class="logos-container">${technologiesLogos(job.technologies)}</div>
              ${job.achievements ? `<p><strong>Achievements:</strong> ${job.achievements.join(", ")}</p>` : ""}
            </div>
            <div class="controls">
              ${nextButton(Number(index))}
              ${previousButton(Number(index))}
            </div>
          </section>
          `,
        ).join("")}
      </div>
    </div>
  </section>
`;

export { experienceMarkup };
