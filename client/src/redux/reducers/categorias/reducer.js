import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
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