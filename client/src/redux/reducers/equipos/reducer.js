import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', name: 'Unca' },
  { id: '2', name: 'Red Star' },
  { id: '3', name: 'Monteros' },
  { id: '4', name: 'Ateneo' },
  { id: '5', name: 'La Carrera' },
  { id: '6', name: 'Olimpia' },
  { id: '7', name: 'Mutual' },
  { id: '8', name: 'Salta Central' },
  { id: '9', name: 'Juventud' },
  { id: '10', name: 'San Lorenzo' },
  { id: '11', name: 'Defensores' },
  { id: '12', name: 'Peñarol Belen' },
];

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.push(action.payload); 
    },
    removeTeam: (state, action) => {
      return state.filter(team => team.id !== action.payload); 
    },
    updateTeam: (state, action) => {
      const { id, data } = action.payload;
      const teamIndex = state.findIndex(team => team.id === id);
      if (teamIndex !== -1) {
        state[teamIndex] = { ...state[teamIndex], ...data };
      }
    }
  }
});

export const { addTeam, removeTeam, updateTeam } = teamSlice.actions;

export default teamSlice.reducer;