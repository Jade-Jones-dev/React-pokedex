import React, { useState, useEffect } from "react";



function PokemonMoves() {
let [pokemonData, setpokemonData] = useState(null);
useEffect(() => {
    fetch(
        "https://pokeapi.co/api/v2/pokemon/1/"
        )
    .then((res) => res.json())
    .then((data)=> {
        setpokemonData(data);
    });
}
,[]);
  if (pokemonData) {
    return (
      <div>
        <p>{pokemonData.name}'s moves:</p>
        <ul>
          {pokemonData.moves.map((move, index) => {
            return <li key={index}>{move.move.name}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

// do ternary operator for if else statement

export default PokemonMoves;
