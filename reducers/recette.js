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
    for (let x = 0; x < state.value.length; x++) {
      state.value = state.value[x].recettes.find((data) => data.title !== action.payload);
      //console.log(state.value);
    }
    }
    
 },
});

export const { addRecette, removeRecette } = recetteSlice.actions;
export default recetteSlice.reducer;