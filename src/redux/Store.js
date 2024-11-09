// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productslices';

const Store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default Store;
