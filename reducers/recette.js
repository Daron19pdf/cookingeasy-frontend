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
    LikedRecette: (state, action) => {
      state.liked.push(action.payload);
    },
    UnlikedRecette: (state, action) => {
      state.liked = state.liked.filter(recette => recette !== action.payload);
    },
    
 },
});

export const { addRecette, removeRecette, LikedRecette, UnlikedRecette } = recetteSlice.actions;
export default recetteSlice.reducer;