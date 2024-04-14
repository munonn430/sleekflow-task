import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactApi } from "../../api";

export const fetchContacts = createAsyncThunk(
  "contact/fetchContacts",
  async (payload) => {
    const response = await contactApi.getContacts({
      ...payload,
    });

    return response.data;
  }
);

export const fetchContactById = createAsyncThunk(
  "contact/fetchContactById",
  async ({ id }) => {
    const response = await contactApi.getContactById({ id });
    return response.data;
  }
);
