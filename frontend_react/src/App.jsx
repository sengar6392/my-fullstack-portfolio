
import "./App.scss";
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
      </div>
    </>
  );
}

export default App;
