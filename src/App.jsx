import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div className>
      <Header />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
