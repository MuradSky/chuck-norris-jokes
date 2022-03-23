import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const RANDOM_URl = "https://api.chucknorris.io/jokes/random";
const JOKE_BY_ID = "https://api.chucknorris.io/jokes/";

export const fetchJoke = createAsyncThunk("users/fetchJoke", async () => {
  const response = await axios.get(RANDOM_URl);
  return response.data;
});

export const fetchJokeBYID = createAsyncThunk(
  "users/fetchJokeBYID",
  async (id?: string | null) => {
    const response = await axios.get(JOKE_BY_ID + id);
    return response.data;
  }
);
