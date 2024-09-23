import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.categories = state.categories.filter(
        category => category.id !== action.payload 
      );
    },
    updateCategory: (state, action) => {
      const { id, data } = action.payload;
      const categoryIndex = state.categories.findIndex(
        category => category.id === id
      );
      if (categoryIndex !== -1) {
        state.categories[categoryIndex] = {
          ...state.categories[categoryIndex], ...data,
        };
      }
    },
  },
});

export const { addCategory, removeCategory, updateCategory } = categorySlice.actions;
export default categorySlice.reducer;