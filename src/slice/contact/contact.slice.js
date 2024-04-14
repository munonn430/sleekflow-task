import { createSlice } from "@reduxjs/toolkit";
import { fetchContactById, fetchContacts } from "./contact.thunkAction";

const INIT_STATE = {
  listing: {
    isLoading: true,
    info: null,
    data: [],
  },
  detail: {
    isLoading: false,
    data: null,
  },
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: INIT_STATE,
  reducers: {
    reset(state) {
      state.listing = {
        isLoading: true,
        info: null,
        data: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.listing.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        const { info, results } = action.payload;
        state.listing.info = info;
        state.listing.data = [...state.listing.data, ...results];
        state.listing.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
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
export const { reset } = contactSlice.actions;

export default contactSlice.reducer;
