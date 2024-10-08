import React, { useContext } from "react";
import Trending from "../components/Trending/Trending";
import Nav from "../components/Nav/Nav";
import AiringToday from "../components/AiringToday/AiringToday";
import OnTheAir from "../components/OnTheAir/OnTheAir";
import styles from "./Movie.module.css";
import { MyContext } from "../App";

const Show = () => {
  const { isDarkMode } = useContext(MyContext);
  return (
    <div className={styles.container}>
      <Nav isShow={true} />
      <main
        className={`${styles.main_container} ${
          isDarkMode ? styles.darkMode : ""
        }`}
      >
        <Trending isShow={false} />
        <AiringToday />
        <OnTheAir />
      </main>
    </div>
  );
};

export default Show;
