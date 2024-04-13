import { createAsyncThunk } from "@reduxjs/toolkit";
import { episodeApi } from "../api";

export const fetchEpisodes = createAsyncThunk(
  "contact/fetchEpisodes",
  async ({ ids }) => {
    const response = await episodeApi.getEpisodes({ ids });
    return response.data;
  }
);
