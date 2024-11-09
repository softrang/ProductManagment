// src/redux/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  from: {},
  deta: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFrom(state, action) {
      state.from = { ...state.from, ...action.payload };
    },
    addProduct(state) {
      state.deta.push(state.from);
    },
    resetForm(state) {
      state.from = {};
    },
    deletIndex(state, action) {
      const indexToDelete = action.payload;
      state.deta.splice(indexToDelete, 1); // Remove the item at the specified index
    }

  },
});

export const { setFrom, addProduct, resetForm , deletIndex} = productSlice.actions;
export default productSlice.reducer;
