import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [],
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    addTeam: (state, action) => {
      state.teams.push(action.payload); 
    },
    removeTeam: (state, action) => {
      state.teams = state.teams.filter(team => team.id !== action.payload); 
    },
    updateTeam: (state, action) => {
      const { id, data } = action.payload;
      const teamIndex = state.teams.findIndex(team => team.id === id);
      if (teamIndex !== -1) {
        state.teams[teamIndex] = { ...state.teams[teamIndex], ...data };
      }
    }
  }
});

export const { addTeam, removeTeam, updateTeam } = teamSlice.actions;

export default teamSlice.reducer;