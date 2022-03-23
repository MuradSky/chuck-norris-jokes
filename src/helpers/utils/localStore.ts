import { IJoke } from "interfaces";

enum Keys {
  FAVORITES = "FAVORITES",
  FAVORITES_ID = "FAVORITES_ID"
}

export const setFavorites = (item: IJoke[]) => {
  localStorage.setItem(Keys.FAVORITES, JSON.stringify(item));
};

export const removeFavorites = () => {
  localStorage.removeItem(Keys.FAVORITES);
};

export const getFavorites = () => {
  const getStorage = localStorage.getItem(Keys.FAVORITES);
  if (getStorage) return JSON.parse(getStorage);
};

export const setFavorieID = (item: string) => {
  localStorage.setItem(Keys.FAVORITES_ID, item);
};

export const removeFavorieID = () => {
  localStorage.removeItem(Keys.FAVORITES_ID);
};

export const getFavorieID = () => {
  return localStorage.getItem(Keys.FAVORITES_ID);
};
