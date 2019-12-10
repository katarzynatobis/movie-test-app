import React from "react";
import styles from "./Card.module.scss";
import { MovieWithActorNames } from "../../../types";

interface CardProps {
  movie: MovieWithActorNames;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <div>
      {movie.actors.map(act => <div>{act}</div>)}
    </div>
  );
};

export default Card;
