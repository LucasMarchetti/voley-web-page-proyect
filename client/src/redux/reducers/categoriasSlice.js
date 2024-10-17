import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'SUB14-MASC' },
  { id: '2', name: 'SUB14-FEM' },
  { id: '3', name: 'A1' },
];

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload); // Agregar directamente al array
    },
    removeCategory: (state, action) => {
      return state.filter(category => category.id !== action.payload);
    },
    updateCategory: (state, action) => {
      const { id, data } = action.payload;
      const categoryIndex = state.findIndex(category => category.id === id);
      if (categoryIndex !== -1) {
        state[categoryIndex] = {
          ...state[categoryIndex],
          ...data,
        };
      }
    },
  },
});

export const { addCategory, removeCategory, updateCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;