import React, { useState, useEffect, useContext } from "react";
import styles from "./CardGrid.module.scss";
import { fetchData, getActorName } from "../../utils";
import { Actor, FetchedMovie, MovieWithActorNames } from "../../types";
import Loader from "../Loader/Loader";
import Card from "./Card/Card";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import * as moviesFile from "../../assets/movies.json";
import * as actorsFile from "../../assets/actors.json";
import { SearchContext } from "../App/App";

const CardGrid: React.FC = () => {
  const [movies, setMovies] = useState<Array<MovieWithActorNames>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const { value: searchValue } = useContext(SearchContext);

  useEffect(() => {
    // const moviesPromise = fetchData<Array<FetchedMovie>>(
    //   "https://0zrzc6qbtj.execute-api.us-east-1.amazonaws.com/kinside/movies"
    // );
    // const actorsPromise = fetchData<Array<Actor>>(
    //   "https://0zrzc6qbtj.execute-api.us-east-1.amazonaws.com/kinside/actors"
    // );

    const moviesPromise = Promise.resolve(
      JSON.parse(JSON.stringify((moviesFile as any).default))
    );
    const actorsPromise = Promise.resolve(
      JSON.parse(JSON.stringify((actorsFile as any).default))
    );

    Promise.all([moviesPromise, actorsPromise])
      .then(([movies, actors]) => {
        const moviesWithActors = movies.map((movie: FetchedMovie) => {
          const actorNames = movie.actorIds.map(id => getActorName(id, actors));
          return { ...movie, actors: actorNames };
        });
        setMovies(moviesWithActors);
        setLoading(false);
      })
      .catch(reason => {
        setError(String(reason));
        setLoading(false);
      });
  }, []);

  const searchResults = !!searchValue
    ? movies.filter(movie =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : movies;

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {(loading && <Loader />) ||
          searchResults.map((movie, index) => {
            const handleImageError = () => {
              const newMovie: MovieWithActorNames = {
                ...movie,
                posterUrl: undefined
              };
              const newMoviesState = [...movies];
              newMoviesState.splice(index, 1, newMovie);
              setMovies(newMoviesState);
            };
            return (
              <div className={styles.item} key={movie.id}>
                <Card movie={movie} onImageError={handleImageError} />
              </div>
            );
          })}
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
