import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: [],
};

export const ingredientSlice = createSlice({
 name: 'ingredient',

  initialState,
 reducers: {
   addIngredientToStore: (state, action) => {
     state.value.push(action.payload);
     console.log(action.payload);
   },
   removeIngredientToStore: (state, action) => {
    state.value = state.value.filter((item) => item !== action.payload);
    }
 },
});

export const { addIngredientToStore, removeIngredientToStore } = ingredientSlice.actions;
export default ingredientSlice.reducer;