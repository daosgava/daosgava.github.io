import mapBoxMapillary from "../images/projects/mapillary/mapbox-mapillary.png";
import csharpCompiler from "../images/projects/csharpCompiler/csharp-compiler.png";
import councilsTools from "../images/projects/opticity/councils-tools.png";
import fuzzySearch from "../images/projects/opticity/fuzzy-search.png";

const PROJECTS = [
  {
    id: 1,
    name: "Opticity Dashboard",
    description: "This project focuses on building modular and reusable components to render various tools for councils. It integrates data from multiple sources and features a fuzzy search functionality, ensuring quick and easy access to relevant information. Designed for flexibility and efficiency, the Opticity Dashboard enhances usability while maintaining a scalable architecture.",
    images: [fuzzySearch, councilsTools],
    url: "https://opticity.com.au",
    github: null,
    technologies: ["TypeScript", "React.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: 2,
    name: "Map & Street View",
    description: "This project is a web-based solution that combines the mapping capabilities of Mapbox with the street-level imagery of Mapillary. It allows users to navigate through interactive maps and panoramic street views.",
    images: [mapBoxMapillary],
    url: null,
    github: "https://github.com/daosgava/poc-mapbox-mapillary-integration",
    technologies: ["Javascript", "Node.js", "Mapbox API", "Mapillary API"],
  },
  {
    id: 3,
    name: "C# Compiler & WebAssembly",
    description: "This project is a prototype of a browser-based C# code editor powered by WebAssembly. Users can write, compile, and execute C# code directly in their browser.",
    images: [csharpCompiler],
    url: null,
    github: "https://github.com/daosgava/csharp-wasm-compiler",
    technologies: ["C#", "JavaScript", "Node.js", "WebAssembly"],
  },
];

export { PROJECTS };
