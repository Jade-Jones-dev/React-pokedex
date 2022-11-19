
import "./App.css";
import Logo from "./Logo.js";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";

function App() {
  function logWhenClicked() {
    return alert("The Pokedex");
  }
return (
  <div>
    <Logo appName = 'Jades' handleClick={logWhenClicked}/>
    <BestPokemon />
    <CaughtPokemon date = {new Date().toLocaleDateString()}/>
  </div>
);
}


export default App;
