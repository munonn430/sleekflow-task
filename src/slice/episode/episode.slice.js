import { createSlice } from "@reduxjs/toolkit";
import { fetchEpisodes } from "./episode.thunkAction";

export const episodeSlice = createSlice({
  name: "episode",
  initialState: {
    listing: {
      isLoading: true,
      data: [],
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.listing.isLoading = true;
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.listing.data = action.payload;
        state.listing.isLoading = false;
      });
  },
});

export default episodeSlice.reducer;
