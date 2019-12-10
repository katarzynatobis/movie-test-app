export interface FetchedMovie {
  id: number;
  title: string;
  year: string;
  pageUrl: string;
  posterUrl: string;
  director: string;
  rating: number;
  plot: string;
  genres: string[];
  actorIds: string[];
  runtime: string;
}

export type MovieWithActorNames = Omit<FetchedMovie, "actorIds"> & {
  actors: string[];
};

export interface Actor {
  id: string;
  first_name: string;
  last_name: string;
}
