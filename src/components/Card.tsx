import React from "react";

import styles from "../styles/Card.module.scss";

interface Props {
  pokemonName: string;
  pokemonId: number;
}

const Card: React.FC<Props> = ({ pokemonName, pokemonId }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={`${import.meta.env.VITE_ARTWORK_URL}/${pokemonId}.png`} />
      </div>
      <div className={styles.name}>{pokemonName}</div>
    </div>
  );
};

export default Card;
