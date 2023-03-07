import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const FavorisSlice = createSlice({
 name: 'Favoris',

  initialState,
 reducers: {
    LikedRecette: (state, action) => {
        const existingIndex = state.value.findIndex(
          (recette) => recette.id === action.payload.id
        );
        if (existingIndex === -1) {
          // If the recipe does not already exist in the state, add it
          state.value.push(action.payload);
        } else {
          // If the recipe already exists in the state, update it
          state.value[existingIndex] = action.payload;
        }
      },
    UnlikedRecette: (state, action) => {
      state.value = state.value.filter(recette => recette !== action.payload);
    },
    
 },
});

export const { LikedRecette, UnlikedRecette } = FavorisSlice.actions;
export default FavorisSlice.reducer;