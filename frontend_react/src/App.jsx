
import "./App.scss";
import Intro from "./components/intro/Intro";
import NavBar from "./components/navbar/NavBar";
import Portfolio from "./components/portfolio/Portfolio";

function App() {

  return (
    <>
      <div className="app">
        <NavBar/>
        <Intro/>
        <Portfolio/>
      </div>
    </>
  );
}

export default App;
