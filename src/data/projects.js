import wordwave from "../assets/projects/wordwave.png";
import notes from "../assets/projects/notes.jpg";
import chingu from "../assets/projects/chingu.png";
import volunteer from "../assets/projects/volunteer.png";
import qr from "../assets/projects/qr.png";
import advice from "../assets/projects/advice.png";

export const projects = [
  {
    title: "WordWave",
    imageSrc: wordwave,
    description: "Ongoing- An AI Image generator application",
    skills: ["React", "Taiwind", "MongoDB", "Node"],
    demo: "https://wordwave-one.vercel.app/",
    source: "https://github.com/Sushmita-Ghosh/wordwave",
    category: ["FullStack", "All"],
  },
  {
    title: "Google Keep Clone",
    imageSrc: notes,
    description:
      "A react based notes taking app that implements all crud operations",
    skills: ["React", "Firebase", "SCSS"],
    demo: "https://keepzz-google-keep.herokuapp.com/",
    source: "https://github.com/Sushmita-Ghosh/google-keep-clone",
    category: ["Frontend", "All"],
  },
  {
    title: "Chingu Trivia",
    imageSrc: chingu,
    description: "A online quiz application using react and node",
    skills: ["React", "Express", "Node", "Lottie Animations"],
    demo: "https://chingu-tect-trivia.netlify.app/",
    source: "https://github.com/Sushmita-Ghosh/chingu-trivia",
    category: ["FullStack", "All"],
  },
  {
    title: "QR Code Generator",
    imageSrc: qr,
    description: "A QR code generator app using react and qrcode.react",
    skills: ["React", "Tailwind", "qrcode.react"],
    demo: "https://qr-code-rosy-two.vercel.app/",
    source: "https://github.com/Sushmita-Ghosh/mern_chat_app",
    category: ["Frontend", "All"],
  },
  {
    title: "Volunteer",
    imageSrc: volunteer,
    description:
      "A simple web application for a local animal shelter to manage their donation inventory.",
    skills: ["React", "CSS", "Proptypes"],
    demo: "https://donation-inventory.vercel.app/",
    source: "https://github.com/Sushmita-Ghosh/donation-inventory",
    category: ["Frontend", "All"],
  },
  {
    title: "Advice Generator",
    imageSrc: advice,
    description: "A advice generator app using Advice Slip API",
    skills: ["React", "Advice Slip API"],
    demo: "https://advice-generator-app-main-gules-nu.vercel.app/",
    source:
      "https://github.com/Sushmita-Ghosh/frontend-mentors/blob/master/advice-generator-app-main/README-template.md",
    category: ["Frontend", "All"],
  },
];
