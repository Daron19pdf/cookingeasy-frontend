import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
 liked: [],
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
        state.value.liked = state.liked.push(action.payload);
    },
 },
});

export const { addRecette, removeRecette, LikedRecette } = recetteSlice.actions;
export default recetteSlice.reducer;