import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const recetteSlice = createSlice({
 name: 'recette',

  initialState,
 reducers: {
   addRecette: (state, action) => {
     state.value.push(action.payload);
   },
   removeRecette: (state, action) => {
    state.value = state.value.filter((item) => item !== action.payload);
    },
  
 },
});

export const { addRecette, removeRecette, LikedRecette, UnlikedRecette } = recetteSlice.actions;
export default recetteSlice.reducer;