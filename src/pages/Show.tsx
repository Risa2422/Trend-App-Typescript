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
        // Elmer : is it acceptable to use stylesheets more thant one?
        // In this case, can i use index.css for the background-color? Since Movie and Show will share the same color
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
