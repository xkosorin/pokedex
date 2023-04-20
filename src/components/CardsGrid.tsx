import Card from "./Card";

import styles from "../styles/CardsGrid.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";

const CardsGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faTable} />
        <span className={styles.title}>Přehled Pokémonů</span>
      </div>
      <div className={styles["grid-container"]}>
        <Card
          pokemonName="Test"
          pokemonImageLink="https://e7.pngegg.com/pngimages/72/948/png-clipart-bulbasaur-pokemon-diamond-and-pearl-pokemon-go-pokedex-ivysaur-bulbasaur-pixel-vertebrate-grass-thumbnail.png"
        />
        <Card
          pokemonName="Test"
          pokemonImageLink="https://e7.pngegg.com/pngimages/72/948/png-clipart-bulbasaur-pokemon-diamond-and-pearl-pokemon-go-pokedex-ivysaur-bulbasaur-pixel-vertebrate-grass-thumbnail.png"
        />
        <Card
          pokemonName="Test"
          pokemonImageLink="https://e7.pngegg.com/pngimages/72/948/png-clipart-bulbasaur-pokemon-diamond-and-pearl-pokemon-go-pokedex-ivysaur-bulbasaur-pixel-vertebrate-grass-thumbnail.png"
        />
        <Card
          pokemonName="Test"
          pokemonImageLink="https://e7.pngegg.com/pngimages/72/948/png-clipart-bulbasaur-pokemon-diamond-and-pearl-pokemon-go-pokedex-ivysaur-bulbasaur-pixel-vertebrate-grass-thumbnail.png"
        />
      </div>
    </div>
  );
};

export default CardsGrid;
