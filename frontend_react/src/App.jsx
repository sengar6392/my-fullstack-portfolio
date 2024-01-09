
import "./App.scss";
import Intro from "./components/intro/Intro";
import NavBar from "./components/navbar/NavBar";

function App() {

  return (
    <>
      <div className="app">
        <NavBar/>
        <Intro/>
      </div>
    </>
  );
}

export default App;
