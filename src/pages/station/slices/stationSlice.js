import httpClient, { API_BASE_URL } from "../../../utils/httpClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchStation = createAsyncThunk(
  "station/fetchStation",
  async (query) => {
    const response = await httpClient.get(
      `${API_BASE_URL}/station`
    );
    return response.data;
  }
);

const reservertionSlice = createSlice({
  name: "stations",
  initialState: {
    stationAll: null,
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStation.fulfilled, (state, action) => {
        state.loading = false;
        state.stationAll = action.payload;
      })
      .addCase(fetchStation.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});


export default reservertionSlice.reducer;
