
import "./App.scss";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import NavBar from "./components/navbar/NavBar";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {

  return (
    <>
      <div className="app">
        <NavBar/>
        <Intro/>
        <Portfolio/>
        <Skills/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
