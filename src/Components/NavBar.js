import React, { useState } from "react";
import { searchPokemon } from "../api";

const NavBar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = async (e) => {
    // e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div>
      <div className="topNav">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="logo-pokeapi"
        />
        <div className="searchbar-container">
          <div>
            <input
              className="SearchBar"
              type="text"
              placeholder="Buscar Pokemon :)..."
              onChange={onChange}
            />
          </div>
          <div className="btn">
            <button onClick={onClick}>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
