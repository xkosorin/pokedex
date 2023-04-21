import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/PokemonDetail.module.scss";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const GET_POKEMON_DETAILS = gql`
  query GetPokemonDetails($id: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
      name
      height
      weight
      pokemon_v2_pokemonabilities(where: { pokemon_id: { _eq: $id } }) {
        pokemon_v2_ability {
          name
          id
        }
      }
      pokemon_v2_pokemontypes(where: { pokemon_id: { _eq: $id } }) {
        pokemon_v2_type {
          name
          id
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
          id
        }
      }
    }
  }
`;

interface Ability {
  name: string;
  id: number;
}

interface AbilityArray {
  pokemon_v2_ability: Ability;
}

interface Stat {
  name: string;
  id: number;
}

interface StatsArray {
  base_stat: number;
  pokemon_v2_stat: Stat;
}

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemonabilities: AbilityArray[];
  pokemon_v2_pokemonstats: StatsArray[];
}

interface PokemonDetails {
  pokemon_v2_pokemon: Pokemon[];
}

const PokemonDetail = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<PokemonDetails>(
    GET_POKEMON_DETAILS,
    {
      variables: { id },
    }
  );
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  if (loading) return <div className={styles.container}>Loading...</div>;
  if (error) return <div className={styles.container}>Network error!</div>;

  const pokemon = data?.pokemon_v2_pokemon[0];

  if (!pokemon) return <div className={styles.container}>Error!</div>;

  const { name, height, weight }: Pokemon = pokemon;
  const abilities: AbilityArray[] = pokemon.pokemon_v2_pokemonabilities;
  const stats = pokemon.pokemon_v2_pokemonstats;

  return (
    <div className={styles.container}>
      <button className={styles["back-button"]} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faChevronLeft} />
        Zpět na přehled
      </button>
      <Tabs
        className={styles["tab-group"]}
        selectedIndex={activeTab}
        onSelect={(index) => setActiveTab(index)}
      >
        <TabList className={styles["tab-list"]}>
          <Tab className={[styles.item, activeTab === 0 ? styles.active : ""]}>
            Profil
          </Tab>
          <Tab className={[styles.item, activeTab === 1 ? styles.active : ""]}>
            Statistiky
          </Tab>
        </TabList>

        <TabPanel
          className={[styles.panel, activeTab === 0 ? styles.active : ""]}
        >
          <div className={styles.image}>
            <div className={styles.name}>{name}</div>
            <img src={`${import.meta.env.VITE_ARTWORK_URL}/${id}.png`} />
          </div>
          <div className={styles["info-container"]}>
            <div className={styles.info}>
              <span className={styles.label}>Typ</span> {name}
              <span className={styles.label}>Výška</span> {height} m
              <span className={styles.label}>Váha</span> {weight} kg
              <span className={styles.label}>Dovednosti</span>
              <div></div>
              <div>
                {abilities.map((ability) => (
                  <div key={ability.pokemon_v2_ability.id}>
                    {ability.pokemon_v2_ability.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel
          className={[styles.panel, activeTab === 1 ? styles.active : ""]}
        >
          <div className={styles.image}>
            <div className={styles.name}>{name}</div>
            <img src={`${import.meta.env.VITE_ARTWORK_URL}/${id}.png`} />
          </div>
          <div className={styles["info-container"]}>
            <div className={styles["stats-info"]}>
              {stats.map((stat) => (
                <span key={stat.pokemon_v2_stat.id} className={styles.stats}>
                  <span className={styles["stats-label"]}>
                    {stat.pokemon_v2_stat.name}
                  </span>
                  <div className={styles.bar}>
                    <div
                      className={styles["bar-fill"]}
                      style={{ width: `${stat.base_stat}%` }}
                    >
                      {stat.base_stat}
                    </div>
                  </div>
                </span>
              ))}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default PokemonDetail;
