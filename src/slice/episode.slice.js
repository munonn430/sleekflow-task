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
  reducers: {},
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

// Action creators are generated for each case reducer function
export const {} = episodeSlice.actions;

export default episodeSlice.reducer;
