
import "./App.css";
import Logo from "./Logo.js";
import CaughtPokemon from "./CaughtPokemon";
import BestPokemon from "./BestPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
  function logWhenClicked() {
    return alert("The Pokedex");
  }
return (
  <div>
    <Logo appName = 'Jades' handleClick={logWhenClicked}/>
    <BestPokemon />
    <CaughtPokemon date = {new Date().toLocaleDateString()}/>
    <PokemonMovesSelector/>
    <PokemonCity/>
  </div>
);
}


export default App;
