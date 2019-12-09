export interface Movie {
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
  runtime: string
}

export interface Actor {
  id: number;
  fistName: string;
  lastName: string;
}