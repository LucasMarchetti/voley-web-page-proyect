
// REdux
import { configureStore } from '@reduxjs/toolkit';

//reducers
import usersReducer from './reducers/usersSlice.js'; 
import modalReducer from './reducers/modalSlice.js';
import equiposReducer from './reducers/equiposSlice.js';
import estadiosReducer from './reducers/estadiosSlice.js';
import categoriasReducer from './reducers/categoriasSlice.js'

const store = configureStore({
  reducer: {
      users: usersReducer,
      modal: modalReducer,
      equipos: equiposReducer,
      estadios: estadiosReducer,
      categorias: categoriasReducer,
  },
});

export default store;