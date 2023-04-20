import Card from "./Card";

import styles from "../styles/CardsGrid.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { PokemonData } from "./Homepage";

interface Props {
  data: PokemonData;
}

const CardsGrid: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <FontAwesomeIcon icon={faTable} />
        <span className={styles.title}>Přehled Pokémonů</span>
      </h3>
      <div className={styles["grid-container"]}>
        {data.pokemon_v2_pokemonformgeneration.map((pokemon) => (
          <Card
            key={pokemon.pokemon_v2_pokemonform.id}
            pokemonName={pokemon.pokemon_v2_pokemonform.name}
            pokemonId={pokemon.pokemon_v2_pokemonform.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
