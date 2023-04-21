import Card from "./Card";

import styles from "../styles/CardsGrid.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { PokemonData } from "./Homepage";
import ReactPaginate from "react-paginate";

interface Props {
  data: PokemonData;
  filter: string;
}

const CardsGrid: React.FC<Props> = ({ data, filter }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  const filteredData: PokemonData =
    filter && filter !== ""
      ? {
          pokemon_v2_pokemonformgeneration:
            data.pokemon_v2_pokemonformgeneration.filter((pokemon) =>
              pokemon.pokemon_v2_pokemonform.name.includes(filter)
            ),
        }
      : data;

  const endIndex = currentPage * ITEMS_PER_PAGE;
  const startIndex = endIndex - ITEMS_PER_PAGE;
  const pageCount = Math.ceil(
    data.pokemon_v2_pokemonformgeneration.length / ITEMS_PER_PAGE
  );

  const slicedData: PokemonData = {
    pokemon_v2_pokemonformgeneration:
      filteredData.pokemon_v2_pokemonformgeneration.slice(startIndex, endIndex),
  };

  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <FontAwesomeIcon icon={faTable} />
        <span className={styles.title}>Přehled Pokémonů</span>
      </h3>
      <div className={styles["grid-container"]}>
        {slicedData.pokemon_v2_pokemonformgeneration.map((pokemon) => (
          <Card
            key={pokemon.pokemon_v2_pokemonform.id}
            pokemonName={pokemon.pokemon_v2_pokemonform.name}
            pokemonId={pokemon.pokemon_v2_pokemonform.id}
          />
        ))}
      </div>
      <div className={styles["pagination-container"]}>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          previousClassName={styles.button}
          nextClassName={styles.button}
          pageClassName={styles.page}
          breakClassName={styles.page}
          activeClassName={styles.active}
          className={styles.pagination}
        />
      </div>
    </div>
  );
};

export default CardsGrid;
