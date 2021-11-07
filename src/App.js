import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Pokemain from "./Components/Pokemain";
import { getPokemonData, getPokemons, searchPokemon } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState();
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const fetchPokemons = async () => {
    try {
      const data = await getPokemons(20, 20 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 20));
      setNotFound(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
    }
    setLoading(false);
  };

  return (
    <>
      <NavBar onSearch={onSearch} />
      {notFound ? (
        <p>No se encontro pokemon</p>
      ) : (
        <Pokemain
          loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      )}
      )
    </>
  );
}

export default App;
