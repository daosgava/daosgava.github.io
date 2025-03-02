import { modeSwitchMarkup } from "./modeSwitch";

const menuMarkup = `
  <nav class="menu">
    <a class="menu-item" href="#about">About</a>
    <a class="menu-item" href="#experience">Experience</a>
    <a class="menu-item" href="#projects">Projects</a>
    <a class="menu-item" href="contact">Contact</a>
    ${modeSwitchMarkup}
  </nav>
`;

const initializeMenuItems = () => {
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      const current = event.currentTarget as HTMLElement;
      menuItems.forEach((item: Element) => {
        item.classList.add("blur");
      });
      current.classList.remove("blur");
    });

    item.addEventListener("mouseout", () => {
      menuItems.forEach((item: Element) => {
        item.classList.remove("blur");
      });
    });
  });
};

export { initializeMenuItems, menuMarkup };
