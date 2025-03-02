const specialCursorMarkup = `<div class="cursor hidden"></div>`;

const initializeCursor = () => {
  const cursor = document.querySelector<HTMLElement>(".cursor");
  const title = document.querySelector<HTMLElement>(".title");

  title!.addEventListener("mouseenter", () => {
    cursor?.classList.remove("hidden");
  });

  title!.addEventListener("mouseout", () => {
    cursor?.classList.add("hidden");
  });

  title!.addEventListener("mousemove", (event) => {
    cursor!.style.left = `${event.clientX}px`;
    cursor!.style.top = `${event.clientY}px`;
  });
};

export { specialCursorMarkup, initializeCursor };
