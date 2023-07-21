import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css';
import Companies from "./components/Companies/Companies";
import Caraousel from "./components/Caraousel/Caraousel";
import Values from "./components/Values/Values";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Caraousel/>
      <Values/>
    </div>
  );
};

export default App;
