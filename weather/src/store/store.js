import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../store/weather/weatherSlice";
import searchReducer from "../store/search/searchSlice";
import settingsReducer from "../store/settings/settingsSlice";
import favoritesReducer from "../store/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    search: searchReducer,
    favorites: favoritesReducer,
    settings: settingsReducer,
  },
});
