import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Estadio Nacional' },
  { id: '2', name: 'Estadio Olímpico' },
  { id: '3', name: 'Estadio Central' },
];

const stadiumsSlice = createSlice({
  name: 'stadiums',
  initialState,
  reducers: {
    addStadium: (state, action) => {
      state.push(action.payload);
    },
    removeStadium: (state, action) => {
      return state.filter(stadium => stadium.id !== action.payload);
    },
    updateStadium: (state, action) => {
      const { id, data } = action.payload;
      const stadiumIndex = state.findIndex(stadium => stadium.id === id);
      if (stadiumIndex !== -1) {
        state[stadiumIndex] = { ...state[stadiumIndex], ...data };
      }
    },
  },
});

export const { addStadium, removeStadium, updateStadium } = stadiumsSlice.actions;

export default stadiumsSlice.reducer;