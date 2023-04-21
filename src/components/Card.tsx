import React from "react";

import styles from "../styles/Card.module.scss";
import { Link } from "react-router-dom";

interface Props {
  pokemonName: string;
  pokemonId: number;
}

const Card: React.FC<Props> = ({ pokemonName, pokemonId }) => {
  return (
    <Link to={`/pokemon/${pokemonId}`} className={styles.container}>
      <div className={styles.image}>
        <img src={`${import.meta.env.VITE_ARTWORK_URL}/${pokemonId}.png`} />
      </div>
      <div className={styles.name}>{pokemonName}</div>
    </Link>
  );
};

export default Card;
