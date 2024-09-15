import React, { useContext } from "react";
import Upcoming from "../components/Upcoming/Upcoming";
import Trending from "../components/Trending/Trending";
import NowPlaying from "../components/NowPlaying/NowPlaying";
import Nav from "../components/Nav/Nav";
import styles from "./Movie.module.css";
import { MyContext } from "../App";

const Movie = () => {
  const { isDarkMode } = useContext(MyContext);

  return (
    <div className={styles.container}>
      <Nav isShow={false} />
      <main
        className={`${styles.main_container} ${
          isDarkMode ? styles.darkMode : ""
        }`}
      >
        <Trending isShow={false} />
        <NowPlaying />
        <Upcoming />
      </main>
    </div>
  );
};
export default Movie;
