import React from "react";
import Card from "../Card/Card";
import { Movie } from "../../types/Types";
import styles from "./CardList.module.css";

type Props = {
  results: Movie[];
  isShow?: boolean;
};

const CardList = (props: Props) => {
  return (
    <div className={styles.card_scroll}>
      <div className={styles.cardListContainer}>
        {props.results.map((movie) => (
          <Card
            title={movie.name || movie.title}
            overview={movie.overview}
            poster_path={movie.poster_path}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
