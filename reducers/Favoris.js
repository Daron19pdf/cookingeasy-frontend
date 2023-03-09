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
          (recette) => recette.title === action.payload.title && recette.photo === action.payload.photo
        );
        if (existingIndex === -1) {
          // If the recipe does not already exist in the state, add it
          state.value.push({ title: action.payload.title, photo: action.payload.photo });
        }
        // else {
        //   // If the recipe already exists in the state, update it
        //   state.value[existingIndex] = { title: action.payload.title, photo: action.payload.photo };
        // }
      },
    UnlikedRecette: (state, action) => {
      state.value = state.value.filter(recette => recette.title !== action.payload.title );
    },
    
 },
});

export const { LikedRecette, UnlikedRecette } = FavorisSlice.actions;
export default FavorisSlice.reducer;
