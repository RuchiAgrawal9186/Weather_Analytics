import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchCityAPI } from "../../utils/searchAPI";

export const searchCities = createAsyncThunk(
  "search/searchCities",
  async (query) => searchCityAPI(query),
);

const searchSlice = createSlice({
  name: "search",
  initialState: { results: [] },
  reducers: {
    clearResults(state) {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(searchCities.fulfilled, (state, action) => {
      state.results = action.payload;
    });
  },
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;
