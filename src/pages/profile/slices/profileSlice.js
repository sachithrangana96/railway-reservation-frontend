import httpClient, { API_BASE_URL } from "../../../utils/httpClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchMe = createAsyncThunk(
  "profile/fetchProfile",
  async (query) => {
    const response = await httpClient.get(
      `${API_BASE_URL}/users/profile/me`
    );
    return response.data;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMe.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});


export default profileSlice.reducer;
