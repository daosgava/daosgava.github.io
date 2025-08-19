import mapBoxMapillary from "../images/projects/mapillary/mapbox-mapillary.png";
import csharpCompiler from "../images/projects/csharpCompiler/csharp-compiler.png";
import councilsTools from "../images/projects/opticity/councils-tools.png";
import fuzzySearch from "../images/projects/opticity/fuzzy-search.png";
import fastCheckoutPage from "../images/projects/fastCheckout/initial-page.png"
import fastCheckoutDrawer from "../images/projects/fastCheckout/drawer.png"

const PROJECTS = [
  {
    id: 1,
    name: "Fast Checkout Page",
    description: "This project focuses on delivering a new cart and checkout experience within the Myer portal. It integrates three sections, allowing users to manage their items, shipping details, gift cards, payments, and more.",
    images: [fastCheckoutPage, fastCheckoutDrawer],
    url: "https://www.myer.com.au/",
    github: null,
    technologies: ["TypeScript", "TanStack", "React", "Nx"],
  },
  {
    id: 2,
    name: "Opticity Dashboard",
    description: "This project focuses on building modular and reusable UI components. It integrates data from multiple sources and features a fuzzy search functionality, ensuring quick and easy access to relevant information.",
    images: [fuzzySearch, councilsTools],
    url: "https://opticity.com.au",
    github: null,
    technologies: ["TypeScript", "React.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: 3,
    name: "Map & Street View",
    description: "This project is a web-based solution that combines the mapping capabilities of Mapbox with the street-level imagery of Mapillary. It allows users to navigate through interactive maps and panoramic street views.",
    images: [mapBoxMapillary],
    url: null,
    github: "https://github.com/daosgava/poc-mapbox-mapillary-integration",
    technologies: ["Javascript", "Node.js", "Mapbox API", "Mapillary API"],
  },
  {
    id: 4,
    name: "C# Compiler & WebAssembly",
    description: "This project is a prototype of a browser-based C# code editor powered by WebAssembly. Users can write, compile, and execute C# code directly in their browser.",
    images: [csharpCompiler],
    url: null,
    github: "https://github.com/daosgava/csharp-wasm-compiler",
    technologies: ["C#", "JavaScript", "Node.js", "WebAssembly"],
  },
];

export { PROJECTS };
