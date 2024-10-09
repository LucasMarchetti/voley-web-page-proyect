import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/reducer.js'; 
import modalReducer from './reducers/modalSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});

export default store;