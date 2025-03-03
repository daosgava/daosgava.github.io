const MODE = {
  light: "light-mode",
  dark: "dark-mode",
} as const;

type Mode = (typeof MODE)[keyof typeof MODE];

const setMode = (mode: Mode) => {
  const newMode = localStorage.getItem("mode") || mode;
  const modeSwitch = document.querySelector("#mode-switch");
  const htmlElement = document.querySelector("html");

  modeSwitch?.classList.remove(...modeSwitch.classList);
  htmlElement?.classList.remove(...htmlElement.classList);

  htmlElement?.classList.add(newMode);
  modeSwitch?.classList.add(newMode);
  modeSwitch?.setAttribute("value", newMode);
};

const toggleMode = (event: Event) => {
  const currentMode = (event.currentTarget as HTMLButtonElement).value;
  const isLightMode = currentMode === MODE.light;
  const newMode = isLightMode ? MODE.dark : MODE.light;
  localStorage.setItem("mode", newMode);

  setMode(newMode);
};

const setSytemMode = () => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const systemMode = isDarkMode ? MODE.dark : MODE.light;
  setMode(systemMode);
};

const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
colorSchemeQuery.addEventListener("change", () => setSytemMode());

const initializeSwitchMode = () => {
  const modeSwitch = document.querySelector("#mode-switch");
  modeSwitch!.addEventListener("click", (e) => toggleMode(e));
  setSytemMode();
};

const modeSwitchMarkup = `
  <button id="mode-switch"></button>
`;

export { modeSwitchMarkup, initializeSwitchMode };
