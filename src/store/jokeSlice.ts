import { createSlice } from "@reduxjs/toolkit";

import { setFavorieID } from "helpers/utils";
import { IJoke } from "interfaces";
import { fetchJoke, fetchJokeBYID } from "api";

export interface CounterState {
  joke: IJoke;
  loading: "loading" | "idle" | "failed";
}

const initialState: CounterState = {
  loading: "loading",
  joke: {
    categories: "" || undefined,
    created_at: "",
    icon_url: "",
    id: "",
    updated_at: "",
    url: "",
    value: ""
  }
};

export const jokeSlice = createSlice({
  name: "joke",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJoke.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchJoke.fulfilled, (state, action) => {
        state.joke = action.payload;
        state.loading = "idle";
        setFavorieID(state.joke.id);
      })
      .addCase(fetchJokeBYID.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchJokeBYID.fulfilled, (state, action) => {
        state.joke = action.payload;
        state.loading = "idle";
      });
  }
});

export default jokeSlice.reducer;
