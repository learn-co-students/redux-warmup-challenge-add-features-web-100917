import {
  FETCH_PAINTINGS,
  SELECT_ACTIVE_PAINTING,
  DELETE_PAINTING,
  SELECT_MUSEUM
} from "./types";
import artworks from "../data/artworks";

export function fetchPaintings() {
  return { type: FETCH_PAINTINGS, payload: artworks };
}

export function deletePainting(paintings, paintingId) {
  const art = paintings.findIndex(art => art.id === paintingId);
  return {
    type: DELETE_PAINTING,
    payload: [...paintings.slice(0, art), ...paintings.slice(art + 1)]
  };
}

export function selectPainting(activeID) {
  return { type: SELECT_ACTIVE_PAINTING, id: activeID };
}

export function selectMuseum(museumId) {
  return { type: SELECT_MUSEUM, payload: museumId };
}
