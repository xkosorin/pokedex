import { useRef } from "react";
import gql from "graphql-tag";
import SearchInput from "./SearchInput";
import CardsGrid from "./CardsGrid";

import styles from "../styles/Homepage.module.scss";
import { useQuery } from "@apollo/client";

const GET_POKEMONS = gql`
  query GetPokemons {
    pokemon_v2_pokemonformgeneration(where: { generation_id: { _eq: 1 } }) {
      pokemon_v2_pokemonform {
        name
        id
      }
    }
  }
`;

interface PokemonForm {
  name: string;
  id: number;
}

interface PokemonFormGeneration {
  pokemon_v2_pokemonform: PokemonForm;
}

export interface PokemonData {
  pokemon_v2_pokemonformgeneration: PokemonFormGeneration[];
}

const Homepage = () => {
  const { loading, error, data } = useQuery<PokemonData>(GET_POKEMONS);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (error) return <div className={styles.container}>Network error!</div>;

  return (
    <div className={styles.container}>
      <div className={styles.inputField}>
        <SearchInput ref={inputRef} handleSubmit={handleSubmit} />
      </div>
      <CardsGrid data={data!} />
    </div>
  );
};

export default Homepage;
