import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import { useState } from "react";
import DarkModeContext from "./context/context";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "dark" : ""}>
        <div className="dark:bg-gray-900 dark:text-white">
          <Header />
          <About />
          <Experience />
          <Skills />

          <Projects />
          <Footer />
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
