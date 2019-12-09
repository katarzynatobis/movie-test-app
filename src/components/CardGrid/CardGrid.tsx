import React, { useState, useEffect } from "react";
import styles from "./CardGrid.module.scss";
import { fetchData } from "../../utils";
import { Movie } from "../../types";
import Loader from "../Loader/Loader";

const CardGrid: React.FC = () => {
  const [movies, setMovies] = useState<Array<Movie> | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetchData(
      "https://0zrzc6qbtj.execute-api.us-east-1.amazonaws.com/kinside/movies"
    )
      .then(movies => setMovies(movies as Array<Movie>))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {loading && <Loader/>}
      </div>
    </main>
  );
};

export default CardGrid;
