import { configureStore } from "@reduxjs/toolkit";
import jokeReducer from "./jokeSlice";
import favoritesReduser from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    joke: jokeReducer,
    favorites: favoritesReduser
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
