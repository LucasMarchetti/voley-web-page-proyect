import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user/reducer.js'; 
import modalReducer from './reducers/modalSlice.js';
import teamReducer from './reducers/equipos/reducer.js';
import stadiumReducer from './reducers/estadios/reducer.js';
const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    teams: teamReducer,
    stadiums: stadiumReducer
  },
});

export default store;