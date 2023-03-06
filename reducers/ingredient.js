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
   },
 },
});

export const { addIngredientToStore } = ingredientSlice.actions;
export default ingredientSlice.reducer;