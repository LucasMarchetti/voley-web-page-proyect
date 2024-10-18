import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalState: null,  
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalState = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      // No restablezcas modalState aquí
    },
    resetModalState: (state) => {
      state.modalState = null; // Restablece modalState después de que el modal se haya cerrado
    },
  },
});

export const { openModal, closeModal, resetModalState } = modalSlice.actions;
export default modalSlice.reducer;