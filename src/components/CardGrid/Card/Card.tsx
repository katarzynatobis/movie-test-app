import React, { useState } from "react";
import styles from "./Card.module.scss";
import { MovieWithActorNames } from "../../../types";
import Loader from "../../Loader/Loader";

interface CardProps {
  movie: MovieWithActorNames;
  onImageError: () => void;
}

const Card: React.FC<CardProps> = ({ movie, onImageError }) => {
  const [loadingImage, setLoadingImage] = useState(!!movie.posterUrl);

  const handleImageError = () => {
    onImageError();
    setLoadingImage(false);
  }

  return (
    <section className={styles.card}>
      <a
        href={movie.pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.anchor}
      >
        {loadingImage && <Loader />}
        {movie.posterUrl && (
          <img
            src={movie.posterUrl}
            alt="poster"
            className={styles.background}
            onError={handleImageError}
            onLoadedData={() => setLoadingImage(false)}
          />
        )}
        <div className={styles.infoContainer}>
          <h2 className={styles.title}>{movie.title}</h2>
          <div className={styles.rating}>
            <b>{(movie.rating || 0).toFixed(1)}</b>/10
          </div>
          <article className={styles.description}>
            <p>
              <b>Starring: {movie.actors.join(", ")}</b>
            </p>
            <p className={styles.plot}>{movie.plot}</p>
          </article>
        </div>
      </a>
    </section>
  );
};

export default Card;
