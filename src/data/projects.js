import chat from "../assets/projects/letschat.png";
import bites from "../assets/projects/bigbites.jpg";
import notes from "../assets/projects/notes.jpg";

export const projects = [
  {
    title: "Big Bites",
    imageSrc: bites,
    description:
      "A Food Ordering Application developed using the public API provided by Swiggy",
    skills: ["React", "Redux", "TailwindCSS"],
    demo: "https://github.com/Sushmita-Ghosh/food_app",
    source: "https://github.com/Sushmita-Ghosh/food_app",
    category: ["Frontend", "All"],
  },
  {
    title: "Google Keep Clone",
    imageSrc: notes,
    description:
      "A react based notes taking app that implements all crud operations",
    skills: ["React", "Firebase", "SCSS"],
    demo: "https://github.com/Sushmita-Ghosh/google-keep-clone",
    source: "https://github.com/Sushmita-Ghosh/google-keep-clone",
    category: ["Frontend", "All"],
  },
  {
    title: "Let's Chat",
    imageSrc: chat,
    description: "A react based web application using MERN stack",
    skills: ["React", "Express", "Node"],
    demo: "https://github.com/Sushmita-Ghosh/mern_chat_app",
    source: "https://github.com/Sushmita-Ghosh/mern_chat_app",
    category: ["FullStack", "All"],
  },
];
