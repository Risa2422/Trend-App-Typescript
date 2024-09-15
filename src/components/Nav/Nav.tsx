import React, { useContext } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type Props = {
  isShow: boolean;
};

const Nav = (props: Props) => {
  const { isDarkMode, setIsDarkMode } = useContext(MyContext);
  return (
    <div className={styles.nav_container}>
      <ul className={styles.nav_show_type}>
        <li>
          <Link
            className={`${styles.link} ${props.isShow ? "" : styles.selected}`}
            to="/"
          >
            Movie
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.link} ${props.isShow ? styles.selected : ""}`}
            to="/show"
          >
            Show
          </Link>
        </li>
      </ul>
      <div className={styles.nav_screenMode}>
        <FontAwesomeIcon
          icon={isDarkMode ? faMoon : faSun}
          className={styles.nav_icon}
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
      </div>
    </div>
  );
};

export default Nav;
