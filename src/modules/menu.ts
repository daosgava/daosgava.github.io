import { modeSwitchMarkup } from "./modeSwitch";
import logo from "../images/logo.png";

const burger = `
  <div class="burger-menu">
    <span></span>
    <span></span>
    <span></span>
  </div>
`;

const MobileMenuMarkup = `
  <nav class="mobile-menu hidden">
    <a class="menu-item" href="#about">About</a>
    <a class="menu-item" href="#experience">Experience</a>
    <a class="menu-item" href="#projects">Projects</a>
    <a class="menu-item" href="#contact">Contact</a>
    ${burger}
  </nav>
`;

const menuMarkup = `
  <nav class="menu">
    ${burger}
    <a class="menu-item logo" href="#home"><img src="${logo}" alt="Daniel Garcia - Software Developer"/></a>
    <a class="menu-item" href="#about">About Me</a>
    <a class="menu-item" href="#experience">Experience</a>
    <a class="menu-item" href="#projects">Projects</a>
    <a class="menu-item" href="#contact">Contact</a>
    ${modeSwitchMarkup}
  </nav>
  ${MobileMenuMarkup}
`;

const initializeMobileMenu = () => {
  const burgerMenu = document.querySelectorAll(".burger-menu");
  const menuContainer = document.querySelector(".menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  burgerMenu?.forEach((menu) =>
    menu.addEventListener("click", () => {
      mobileMenu?.classList.toggle("hidden");
      menuContainer?.classList.toggle("hidden");
    }),
  );
};

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

    item.addEventListener("click", () => {
      menuItems.forEach((item: Element) => {
        item.classList.remove("blur");
        const mobileMenu = document.querySelector(".mobile-menu");
        const menuContainer = document.querySelector(".menu");

        mobileMenu?.classList.add("hidden");
        menuContainer?.classList.remove("hidden");
      });
    });
  });

  initializeMobileMenu();
};

export { initializeMenuItems, menuMarkup, MobileMenuMarkup };
