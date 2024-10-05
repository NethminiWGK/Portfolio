import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/Skill/skill";
import Contact from "./components/Contact/contact";
import Project from "./components/Projects/project";
import Skills from "./components/Skills/skills";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Intro/>
    <Skills/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
