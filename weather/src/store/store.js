import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./favorites/favoritesSlice";

export const store = configureStore({
    reducer: {
        favorite: favoritesSlice
    },
});
