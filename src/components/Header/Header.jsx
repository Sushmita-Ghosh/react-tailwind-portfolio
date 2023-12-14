import { BsStars } from "react-icons/bs";
import { useContext } from "react";
import DarkModeContext from "../../context/context";
import { Link } from "react-router-dom";

const Header = () => {
  const { setDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <section className="bg-white px-10 dark:bg-gray-900 dark:text-white">
      <nav className="py-5 mb-12 flex justify-between">
        <h1 className="text-xl font-burtons">MyPortfolio</h1>
        <ul className="flex items-center">
          <li>
            <BsStars
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl"
            />
          </li>
          <li>
            <Link
              to={"../../../public/Sushmita_Ghosh_Resume.pdf"}
              target="_blank"
              download={true}
              className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-4 py-2 rounded-md ml-8"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
