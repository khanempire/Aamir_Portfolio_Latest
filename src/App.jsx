import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimateSection from "./components/AnimateSection";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AnimateSection>
          <Journey />
        </AnimateSection>
        <AnimateSection>
          <Experience />
        </AnimateSection>
        <AnimateSection>
          <Projects />
        </AnimateSection>
        <AnimateSection>
          <Skills />
        </AnimateSection>
        <AnimateSection>
          <Contact />
        </AnimateSection>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
