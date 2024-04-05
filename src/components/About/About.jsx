import { AiFillGithub, AiFillLinkedin, AiFillFile } from "react-icons/ai";
import AboutImage from "../../assets/about.png";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Passionate Web Developer",
      "Full Stack Web Developer",
      "Lover of Cats",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="min-h-screen px-10 ">
      <div className="text-center px-10 pt-10 pb-5">
        <h2 className="text-5xl py-2 text-purple-600 font-medium">
          Hi, My Name is Sushmita
        </h2>
        <h3 className="text-2xl py-2">
          I am a {text} <Cursor />
        </h3>
        <p className="text-medium py-2 leading-8 text-gray-800 dark:text-gray-400">
          I am a software developer on a mission to craft web experiences.
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
        <a href="https://github.com/Sushmita-Ghosh">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/sushmita-ghosh-b35a31168/">
          <AiFillLinkedin />
        </a>
        <Link
          to="../../../public/Sushmita_Ghosh_Resume.pdf"
          target="_blank"
          download={true}
        >
          <AiFillFile />
        </Link>
      </div>

      <div className="animate-updown relative bg-gradient-to-b from-purple-400 to-pink-400 rounded-full w-60 h-60 md:w-80 md:h-80 mt-10 mx-auto overflow-hidden">
        <img src={AboutImage} alt="" />
      </div>
    </section>
  );
};

export default About;
