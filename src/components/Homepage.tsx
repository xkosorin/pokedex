import { useRef } from "react";
import SearchInput from "./SearchInput";
import CardsGrid from "./CardsGrid";

import styles from "../styles/Homepage.module.scss";

const Homepage = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputField}>
        <SearchInput ref={inputRef} handleSubmit={handleSubmit} />
      </div>
      <CardsGrid />
    </div>
  );
};

export default Homepage;
