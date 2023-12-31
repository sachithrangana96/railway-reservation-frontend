import httpClient, { API_BASE_URL } from "../../../utils/httpClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchReservation = createAsyncThunk(
  "reserve/fetchReserve",
  async (query) => {
    const response = await httpClient.get(
      `${API_BASE_URL}/trains?startStation=${query.from}&endStation=${query.to}&date=${query.date}`
    );
    return response.data;
  }
);

const reservertionSlice = createSlice({
  name: "reservation",
  initialState: {
    allReservation: null,
    singleRecord: null,
    loading: null,
    error: null,
  },
  reducers: {
    getSingleRecord: (state, action) => {
      state.singleRecord = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReservation.fulfilled, (state, action) => {
        state.loading = false;
        state.allReservation = action.payload;
      })
      .addCase(fetchReservation.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});

export const { getSingleRecord } = reservertionSlice.actions;
export default reservertionSlice.reducer;
