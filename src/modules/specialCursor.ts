const specialCursorMarkup = `<div class="cursor transparent"></div>`;

const initializeCursor = () => {
  const cursor = document.querySelector<HTMLElement>(".cursor");
  const title = document.querySelector<HTMLElement>(".title");

  title!.addEventListener("mouseenter", () => {
    cursor?.classList.remove("transparent");
  });

  title!.addEventListener("mouseout", () => {
    cursor?.classList.add("transparent");
  });

  title!.addEventListener("mousemove", (event) => {
    cursor!.style.left = `${event.clientX}px`;
    cursor!.style.top = `${event.clientY}px`;
  });
};

export { specialCursorMarkup, initializeCursor };
