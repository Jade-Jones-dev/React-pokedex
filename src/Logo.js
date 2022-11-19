

const Logo = (props) => {
  // Create an event handler
    return(
      <header>
      <h1>Welcome to {props.appName} Pokedex</h1>
      <img onClick={props.handleClick} className ="image" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="Pokemon"></img>
      </header>
    );
  };

export default Logo;