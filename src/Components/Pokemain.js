import React from "react";
import Loadmore from "./Loadmore";
import Pokemon from "./Pokemon";

const Pokemain = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };

  return (
    <>
      {loading ? (
        <p>Cargando poekmones</p>
      ) : (
        <div className="pokemon-container">
          {pokemons.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
      )}
      <Loadmore
        click={nextPage}
        page={total}
        totalPage={100}
        onLeftClick={lastPage}
        onRightClick={nextPage}
      />
    </>
  );
};

export default Pokemain;
