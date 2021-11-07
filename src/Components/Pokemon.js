import React from "react";

const Pokemon = (props) => {
  const { pokemon } = props;

  return (
    <div>
      <div className="pokemon-block-back">
        <img src={pokemon.sprites.front_default} alt="pokename" />
        <div className="name">{pokemon.name}</div>
        <div>#{pokemon.id}</div>
      </div>
    </div>
  );
};

export default Pokemon;
