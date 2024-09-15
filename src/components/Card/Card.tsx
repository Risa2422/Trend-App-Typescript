import React from "react";
import styles from "./Card.module.css";

type Props = {
  title: string;
  poster_path: string;
  overview: string;
};

const Card = (props: Props) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.card_image}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`}
          alt="poster_image"
        />
      </div>
      <div className={styles.card_details}>
        <h4 className={styles.card_title}>{props.title}</h4>
        <p className={styles.card_overview}>
          {props.overview ? props.overview : "No description"}
        </p>
      </div>
    </div>
  );
};

export default Card;
