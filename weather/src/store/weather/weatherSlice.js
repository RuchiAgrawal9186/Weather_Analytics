import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCurrentWeather, fetchForecast } from "../../utils/weatherAPI";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async ({ city, unit }) => {
    const current = await fetchCurrentWeather(city, unit);
    const forecast = await fetchForecast(city, unit);
    return { city, current, forecast };
  },
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: {},
    lastFetched: {},
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.data[action.payload.city] = action.payload;
        state.lastFetched[action.payload.city] = Date.now();
        state.status = "success";
      })
      .addCase(getWeather.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default weatherSlice.reducer;
