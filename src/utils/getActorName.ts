import { Actor } from "../types";

export const getActorName = (id: string, actors: Array<Actor>): string => {
  const actor = actors.find(item => item.id === id);
  if (!actor) {
    return "Unknown Unknown";
  }
  return `${actor.first_name} ${actor.last_name}`;
};
