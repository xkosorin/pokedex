import React, { forwardRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/SearchInput.module.scss";

interface Props {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ handleSubmit }, ref) => {
    const [input, setInput] = useState<string>("");

    const clearInputField = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setInput("");
    };

    return (
      <form className={styles.container} onSubmit={handleSubmit}>
        <button type="submit" className={styles["search-icon"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type="text"
          placeholder="Zadejte jméno Pokémona"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={ref}
        />
        <button
          className={styles["clear-icon"]}
          onClick={(e) => clearInputField(e)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </form>
    );
  }
);

export default SearchInput;
