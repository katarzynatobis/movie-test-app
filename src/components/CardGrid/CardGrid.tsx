import React, { useState, useEffect } from "react";
import styles from "./CardGrid.module.scss";
import { fetchData, getActorName } from "../../utils";
import { Actor, FetchedMovie, MovieWithActorNames } from "../../types";
import Loader from "../Loader/Loader";
import Card from "./Card/Card";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as moviesFile from "../../assets/movies.json";
import * as actorsFile from "../../assets/actors.json";

const CardGrid: React.FC = () => {
  const [movies, setMovies] = useState<Array<MovieWithActorNames> | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    // const moviesPromise = fetchData<Array<FetchedMovie>>(
    //   "https://0zrzc6qbtj.execute-api.us-east-1.amazonaws.com/kinside/movies"
    // );
    // const actorsPromise = fetchData<Array<Actor>>(
    //   "https://0zrzc6qbtj.execute-api.us-east-1.amazonaws.com/kinside/actors"
    // );

    const moviesPromise = Promise.resolve(JSON.parse(JSON.stringify((moviesFile as any).default)));
    const actorsPromise = Promise.resolve(JSON.parse(JSON.stringify((actorsFile as any).default)));

    Promise.all([moviesPromise, actorsPromise])
      .then(([movies, actors]) => {
        const moviesWithActors = movies.map((movie: FetchedMovie) => {
          const actorNames = movie.actorIds.map(id => getActorName(id, actors));
          return { ...movie, actors: actorNames };
        });
        setMovies(moviesWithActors);
      })
      .catch(reason => setError(String(reason)))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {loading && <Loader />}
        {movies && movies.map(movie => <Card movie={movie} />)}
        {error && (
          <ErrorMessage
            message={error}
            cancelError={() => setError(undefined)}
          />
        )}
      </div>
    </main>
  );
};

export default CardGrid;
