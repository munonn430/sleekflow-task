import { createSlice } from "@reduxjs/toolkit";
import { fetchContactById, fetchContacts } from "./contact.thunkAction";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    listing: {
      isLoading: true,
      info: null,
      data: [],
    },
    detail: {
      isLoading: false,
      data: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.listing.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        const { info, results } = action.payload;
        state.listing.info = info;
        state.listing.data = results;
        state.listing.isLoading = false;
      })
      .addCase(fetchContactById.pending, (state) => {
        state.detail.isLoading = true;
      })
      .addCase(fetchContactById.fulfilled, (state, action) => {
        state.detail.data = action.payload;
        state.detail.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = contactSlice.actions;

export default contactSlice.reducer;
