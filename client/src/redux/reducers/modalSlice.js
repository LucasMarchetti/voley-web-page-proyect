import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalState: null,  // null, 'ModalNewTeamState', 'ModalNewCategoryState', 'ModalNewStadiumState'
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalState = action.payload;  // Recibe el tipo de modal
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalState = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;