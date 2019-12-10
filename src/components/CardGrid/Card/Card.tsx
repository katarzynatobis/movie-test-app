import React from "react";
import styles from "./Card.module.scss";
import { MovieWithActorNames } from "../../../types";

interface CardProps {
  movie: MovieWithActorNames;
}

const Card: React.FC<CardProps> = ({ movie }) => {

  return (
    <section className={styles.card}>
      <img src={movie.posterUrl} className={styles.background}/>
      {movie.actors.map(act => <div key={act}>{String(act)}</div>)}
    </section>
  );
};

export default Card;
