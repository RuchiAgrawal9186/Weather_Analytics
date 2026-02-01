import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorite",
    initialState: {
        
    },
    reducers: {
        // addFavorite: (state, action) => {
            
        // },
        // removeFavorite: (state, action) => {
            
        // }
    }
})

export const {addFavorite,removeFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer