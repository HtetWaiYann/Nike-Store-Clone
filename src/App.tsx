import "./App.css";
import { Hero } from "./components";

import { heroapi } from "./data/data.jsx";

function App() {
  console.log(heroapi);
  return (
    <main>
      <Hero heroapi={heroapi}/>
    </main>
  );
}

export default App;
