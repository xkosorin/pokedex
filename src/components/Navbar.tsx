import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles["navbar-menu"]}>
        <li>
          <Link to="/error">O nás</Link>
        </li>
        <li>
          <Link to="/">Pokémoni</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
