import httpClient, { API_BASE_URL } from "../../../utils/httpClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createBooking = createAsyncThunk(
  "booking/bookingTrain",
  async (requestData) => {
    console.log("request data", requestData)
    try {
      ;
      const response = await httpClient.post(
        `${API_BASE_URL}/bookings`,
        requestData
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const bookingTrain = createSlice({
  name: "booking",
  initialState: {
    data: null,
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = null;
        state.error = action.error?.message;
      });
  },
});

export default bookingTrain.reducer;
