import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  federations: [],
};

const federationSlice = createSlice({
  name: 'federations',
  initialState,
  reducers: {
    addFederation: (state, action) => {
      state.federations.push(action.payload);
    },
    removeFederation: (state, action) => {
      state.federations = state.federations.filter(
        federation => federation.id !== action.payload
      );
    },
    updateFederation: (state, action) => {
      const { id, data } = action.payload;
      const federationIndex = state.federations.findIndex(
        federation => federation.id === id
      );
      if (federationIndex !== -1) {
        state.federations[federationIndex] = {
          ...state.federations[federationIndex],...data,
        };
      }
    },
  },
});

export const { addFederation, removeFederation, updateFederation } = federationSlice.actions;
export default federationSlice.reducer;