import React from "react";

import styles from "../styles/Card.module.scss";

interface Props {
  pokemonName: string;
  pokemonImageLink: string;
}

const Card: React.FC<Props> = ({ pokemonName, pokemonImageLink }) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={pokemonImageLink} />
      </div>
      <div className={styles.name}>{pokemonName}</div>
    </div>
  );
};

export default Card;
