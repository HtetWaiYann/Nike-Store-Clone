import "./App.css";
import { Hero, Sales } from "./components";

import { heroapi, popularsales, toprateslaes } from "./data/data.jsx";

function App() {
  console.log(heroapi);
  return (
    <main>
      <Hero heroapi={heroapi} />
      <Sales sales={popularsales}/>
      <Sales sales={toprateslaes}/>
    </main>
  );
}

export default App;
