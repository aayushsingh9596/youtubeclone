import { configureStore } from '@reduxjs/toolkit';
import toggleslice from './toggleslice';
import apiCallSlice from './apiCallSlice';

const store = configureStore({
  reducer: {
    toggle: toggleslice,
    apiCall:apiCallSlice
  },
});

export default store;
