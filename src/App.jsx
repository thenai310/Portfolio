import './App.css'
import { About } from "./components/About.jsx";
import { Contact } from "./components/Contact.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Nav } from "./components/Nav.jsx";
import { Skills } from "./components/Skills.jsx";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App
