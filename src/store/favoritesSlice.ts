import { createSlice } from "@reduxjs/toolkit";
import { getFavorites, setFavorites, removeFavorites } from "helpers/utils";
import { IJoke } from "interfaces";

const localFavorites = getFavorites();

export interface CounterState {
  favorites: IJoke[] | null;
  counter: number;
  sameJoke: boolean;
}

const initialState: CounterState = {
  favorites: localFavorites,
  counter: localFavorites ? localFavorites.length : 0,
  sameJoke: false
};

export const favoriteSlice = createSlice({
  name: "currentFavorite",
  initialState,
  reducers: {
    addFavorite: (state, { payload }) => {
      const { favorites } = state;
      if (favorites) state.favorites = [...favorites, payload];
      else state.favorites = [payload];
      if (state.favorites?.length > 10) state.favorites.shift();
      state.counter = state.favorites?.length;
      setFavorites(state.favorites);
    },

    removeFavorite: (state, { payload }) => {
      const { favorites } = state;
      if (favorites) {
        const filter = favorites.filter((item: IJoke) => item.id !== payload);
        if (!!filter.length) {
          state.favorites = filter;
          setFavorites(state.favorites);
          state.counter = state.favorites?.length;
        } else {
          state.favorites = null;
          state.counter = 0;
          removeFavorites();
        }
      }
    },

    clearFavoriteList: (state) => {
      state.favorites = null;
      state.counter = 0;
      removeFavorites();
    }
  }
});

export const {
  addFavorite,
  removeFavorite,
  clearFavoriteList
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
