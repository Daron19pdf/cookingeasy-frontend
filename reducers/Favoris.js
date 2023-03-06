import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const FavorisSlice = createSlice({
 name: 'Favoris',

  initialState,
 reducers: {
    LikedRecette: (state, action) => {
      state.value.push(action.payload);
    },
    UnlikedRecette: (state, action) => {
      state.value = state.value.filter(recette => recette !== action.payload);
    },
    
 },
});

export const { LikedRecette, UnlikedRecette } = FavorisSlice.actions;
export default FavorisSlice.reducer;